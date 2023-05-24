import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.scss";
import { useEffect, useState } from "react";

const PostList = ({ isPosting, onStopPosting }) => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch("http://localhost:8080/posts");
			const respData = await response.json();
			setPosts(respData.posts);
		};

		fetchPosts();
	}, []);

	const addPostHandler = (postData) => {
		fetch("http://localhost:8080/posts", {
			method: "POST",
			body: JSON.stringify(postData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setPosts((existingPosts) => [postData, ...existingPosts]);
	};

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			)}
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post) => (
						<Post key={post.body} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>No posts at the moment!</h2>
					<p>Start adding some!</p>
				</div>
			)}
		</>
	);
};

export default PostList;
