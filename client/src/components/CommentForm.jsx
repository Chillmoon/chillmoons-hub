import { Button, Textarea } from "flowbite-react";

import AlertMessage from "./AlertMessage";

export default function CommentForm({
  comment,
  setComment,
  handleSubmit,
  commentError,
}) {
  return (
    <form
      className="border border-teal-500 rounded-md p-3"
      onSubmit={handleSubmit}
    >
      <Textarea
        placeholder="Add a comment.."
        rows="3"
        maxLength={200}
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <div className="flex justify-between items-center mt-5 ">
        <p className="text-grey-500 text-sm">
          {200 - comment.length} characters remaining
        </p>
        <Button outline gradientDuoTone="cyanToBlue" type="submit">
          Submit
        </Button>
      </div>
      <AlertMessage message={commentError} type="failure" />
    </form>
  );
}
