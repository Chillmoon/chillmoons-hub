import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HiAnnotation,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import CardComponent from "./CardComponent";
import DataTableComponent from "./DataTableComponent";

export default function DashboardComponent() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({});

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch("/api/user/getusers?limit=5");
        const postRes = await fetch("/api/post/getposts?limit=5");
        const commentRes = await fetch("/api/comment/getcomments?limit=5");

        const userData = await userRes.json();
        const postData = await postRes.json();
        const commentData = await commentRes.json();

        if (userRes.ok && postRes.ok && commentRes.ok) {
          setUsers(userData.users);
          setPosts(postData.posts);
          setComments(commentData.comments);
          setStats({
            totalUsers: userData.totalUsers,
            totalPosts: postData.totalPosts,
            totalComments: commentData.totalComments,
            lastMonthUsers: userData.lastMonthUsers,
            lastMonthPosts: postData.lastMonthPosts,
            lastMonthComments: commentData.lastMonthComments,
          });
        }
      } catch (error) {
        console.error(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchData();
    }
  }, [currentUser]);

  return (
    <div className="p-3 md:mx-auto">
      <div className="flex-wrap flex gap-4 justify-center">
        <CardComponent
          title="Total Users"
          total={stats.totalUsers}
          lastMonth={stats.lastMonthUsers}
          icon={<HiOutlineUserGroup />}
          bgColor="bg-emerald-600"
        />
        <CardComponent
          title="Total Comments"
          total={stats.totalComments}
          lastMonth={stats.lastMonthComments}
          icon={<HiAnnotation />}
          bgColor="bg-teal-600"
        />
        <CardComponent
          title="Total Posts"
          total={stats.totalPosts}
          lastMonth={stats.lastMonthPosts}
          icon={<HiDocumentText />}
          bgColor="bg-cyan-600"
        />
      </div>
      <div className="flex flex-wrap gap-4 py-3 mx-auto justify-center">
        <DataTableComponent
          title="Recent Users"
          data={users.map((user) => ({
            image: (
              <img
                src={user.profilePicture}
                alt="user"
                className="w-10 h-10 rounded-full bg-gray-500"
              />
            ),
            username: user.username,
          }))}
          columns={["User image", "Username"]}
          tabLink="/dashboard?tab=users"
        />
        <DataTableComponent
          title="Recent Comments"
          data={comments.map((comment) => ({
            content: <p className="line-clamp-2">{comment.content}</p>,
            likes: comment.numberOfLikes,
          }))}
          columns={["Comment content", "Likes"]}
          tabLink="/dashboard?tab=comments"
        />
        <DataTableComponent
          title="Recent Posts"
          data={posts.map((post) => ({
            image: (
              <img
                src={post.image}
                alt="post"
                className="w-14 h-10 rounded-md bg-gray-500"
              />
            ),
            title: post.title,
            category: post.category,
          }))}
          columns={["Post image", "Post Title", "Category"]}
          tabLink="/dashboard?tab=posts"
        />
      </div>
    </div>
  );
}
