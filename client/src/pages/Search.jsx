import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import SidebarForm from "../components/SidebarForm";
import PostList from "../components/PostList";

const sidebarReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return action.initialState;
    default:
      return state;
  }
};

export default function Search() {
  const initialState = {
    searchTerm: "",
    sort: "desc",
    category: "",
  };

  const [sidebarData, dispatch] = useReducer(sidebarReducer, initialState);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    dispatch({
      type: "RESET",
      initialState: {
        searchTerm: urlParams.get("searchTerm") || "",
        sort: urlParams.get("sort") || "desc",
        category: urlParams.get("category") || "",
      },
    });

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      try {
        const res = await fetch(`/api/post/getposts?${searchQuery}`);
        const data = await res.json();
        setPosts(data.posts);
        setShowMore(data.posts.length === 9);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("sort", sidebarData.sort);
    urlParams.set("category", sidebarData.category);
    navigate(`/search?${urlParams.toString()}`);
  };

  const handleShowMore = async () => {
    const startIndex = posts.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    try {
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      setShowMore(data.posts.length === 9);
    } catch (error) {
      console.error("Error loading more posts:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <SidebarForm
          sidebarData={sidebarData}
          dispatch={dispatch}
          onSubmit={handleSubmit}
        />
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5 ">
          Posts results:
        </h1>
        <PostList
          posts={posts}
          loading={loading}
          showMore={showMore}
          onShowMore={handleShowMore}
        />
      </div>
    </div>
  );
}
