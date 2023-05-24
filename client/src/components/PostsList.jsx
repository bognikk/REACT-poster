import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.scss";
import { useState } from "react";

const PostList = ({ isPosting, onStopPosting }) => {
	const [posts, setPosts] = useState([]);

	const addPostHandler = (postData) => {
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
