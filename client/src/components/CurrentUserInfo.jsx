import { Link } from "react-router-dom";

export default function CurrentUserInfo({ currentUser }) {
  return (
    <div className="flex items-center gap-1 my-5 text-gray-500 text-sm">
      <p>Signed in as:</p>
      <img
        className="h-5 w-5 object-cover rounded-full"
        src={currentUser.profilePicture}
        alt={currentUser.username}
      />
      <Link
        className="text-xs text-cyan-600 hover:underline"
        to="/dashboard?tab=profile"
      >
        @{currentUser.username}
      </Link>
    </div>
  );
}
