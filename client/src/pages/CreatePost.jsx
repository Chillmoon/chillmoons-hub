import React, { useState } from "react";
import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [value, setValue] = useState("");
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            id="title"
            required
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="front-end">Front-end</option>
            <option value="back-end">Back-end</option>
          </Select>
        </div>
        <div className="flex  gap-4 items-center border-4 border-teal-500 border-dotted p-3 ">
          <FileInput type="file" accept="image/*" />
          <Button type="button" gradientDuoTone="greenToBlue" size="sm" outline>
            Upload
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Write a post..."
          className="h-72 mb-12"
          required
        />
        <Button type="submit" gradientDuoTone="greenToBlue">
          Publish
        </Button>
      </form>
    </div>
  );
}
