import { signoutSuccess } from "../redux/user/userSlice";

export const handleSignout = async (dispatch) => {
  try {
    const res = await fetch("/api/user/signout", {
      method: "POST",
    });
    const data = await res.json();
    if (!res.ok) {
      console.log(data.message);
    } else {
      dispatch(signoutSuccess());
    }
  } catch (error) {
    console.log(error.message);
  }
};
