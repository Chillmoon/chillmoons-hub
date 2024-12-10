import PostCard from "./PostCard";

const PostList = ({ posts, loading, showMore, onShowMore }) => (
  <div className="p-7 flex flex-wrap gap-4">
    {!loading && posts.length === 0 && (
      <p className="text-xl text-gray-500">No posts found.</p>
    )}
    {loading && <p className="text-xl text-gray-500">Loading...</p>}
    {!loading && posts.map((post) => <PostCard key={post._id} post={post} />)}
    {showMore && (
      <button
        onClick={onShowMore}
        className="text-teal-500 text-lg hover:underline p-7 w-full"
      >
        Show More
      </button>
    )}
  </div>
);

export default PostList;
