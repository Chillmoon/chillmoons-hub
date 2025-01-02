import { Link } from "react-router-dom";

const PostCard = ({ post, className, style }) => {
  return (
    <div
      className={`group relative border border-teal-500 hover:border-2 h-[420px] overflow-hidden rounded-lg w-[360px] transition-all ${className}`}
      style={style}
    >
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full object-cover group-hover:scale-105 transition-transform duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2 group-hover:text-teal-600 transition-colors duration-300">
          {post.title}
        </p>
        <span className="italic text-sm text-gray-500 group-hover:text-teal-500 transition-colors duration-300">
          {post.category}
        </span>
        <Link
          to={`/post/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read article
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
