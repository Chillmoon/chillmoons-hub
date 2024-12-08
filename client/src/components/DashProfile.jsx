import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

import AlertMessage from "./AlertMessage";
import ConfirmationModal from "./ConfirmationModal";

import { app } from "../firebase";
import {
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "../redux/user/userSlice";
import { handleSignout } from "../utils/handleSignout";

export default function DashProfile() {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileURL, setImageFileURL] = useState(null);
  const [uploadingProgress, setUploadingProgress] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filePickerRef = useRef();
  const dispatch = useDispatch();
  const { currentUser, error, loading } = useSelector((state) => state.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileURL(URL.createObjectURL(file));
    }
  };

  const uploadImage = () => {
    const storage = getStorage(app);
    const storageRef = ref(
      storage,
      `${new Date().getTime()}_${imageFile.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    setIsUploading(true);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (
          (snapshot.bytesTransferred / snapshot.totalBytes) *
          100
        ).toFixed(0);
        setUploadingProgress(progress);
      },
      () => {
        setUploadingProgress(null);
        setImageFile(null);
        setImageFileURL(null);
        setIsUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageFileURL(url);
          setFormData({ ...formData, profilePicture: url });
          setIsUploading(false);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) return;

    dispatch(updateStart());
    try {
      const res = await fetch(`api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(updateSuccess(data));
        setSuccessMessage("User is updated successfully");
      } else {
        dispatch(updateFailure(data.message));
      }
    } catch (error) {
      dispatch(updateFailure(error));
    }
  };

  const handleDeleteUser = async () => {
    setShowModal(false);
    dispatch(deleteUserStart());
    try {
      const res = await fetch(`api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(deleteUserSuccess(data));
        setSuccessMessage("User is deleted successfully");
      } else {
        dispatch(deleteUserFailure(data.message));
      }
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  useEffect(() => {
    if (imageFile) uploadImage();
  }, [imageFile]);

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={filePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => filePickerRef.current.click()}
        >
          {uploadingProgress && (
            <CircularProgressbar
              value={uploadingProgress}
              text={`${uploadingProgress}%`}
              strokeWidth={5}
            />
          )}
          <img
            src={imageFileURL || currentUser.profilePicture}
            alt="profile"
            className={`rounded-full w-full h-full object-cover ${
              isUploading && "opacity-50"
            }`}
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="Username"
          defaultValue={currentUser.username}
          onChange={handleChange}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="Email"
          defaultValue={currentUser.email}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button
          type="submit"
          gradientDuoTone="greenToBlue"
          outline
          disabled={isUploading || loading}
        >
          {isUploading || loading ? "Loading..." : "Update"}
        </Button>
        {currentUser.isAdmin && (
          <Link to="/create-post">
            <Button gradientDuoTone="greenToBlue" className="w-full">
              Create a post
            </Button>
          </Link>
        )}
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span onClick={() => setShowModal(true)} className="cursor-pointer">
          Delete account
        </span>
        <span
          onClick={() => handleSignout(dispatch)}
          className="cursor-pointer"
        >
          Sign Out
        </span>
      </div>
      <AlertMessage message={successMessage} type="success" />
      <AlertMessage message={error} type="failure" />
      <ConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleDeleteUser}
        message="Are you sure you want to delete your account?"
      />
    </div>
  );
}
