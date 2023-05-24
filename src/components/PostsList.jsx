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
			<ul className={classes.posts}>
				<Post author="Lena" body="I love React.js!" />
			</ul>
		</>
	);
};

export default PostList;
