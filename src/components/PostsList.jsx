import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.scss";

const PostList = () => {
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");

	const bodyChangeHandler = (event) => {
		setEnteredBody(event.target.value);
	};

	const authorChangeHandler = (event) => {
		setEnteredAuthor(event.target.value);
	};

	return (
		<>
			<Modal>
				<NewPost
					onBodyChange={bodyChangeHandler}
					onAuthorChange={authorChangeHandler}
				/>
			</Modal>
			<ul className={classes.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author="Lena" body="I love React.js!" />
			</ul>
		</>
	);
};

export default PostList;
