import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.scss";

const PostList = () => {
	const [modalIsVisible, setModalIsVisible] = useState(true);
	const [enteredBody, setEnteredBody] = useState("");
	const [enteredAuthor, setEnteredAuthor] = useState("");

	const hideModalHandler = () => {
		setModalIsVisible(false);
	};

	const bodyChangeHandler = (event) => {
		setEnteredBody(event.target.value);
	};

	const authorChangeHandler = (event) => {
		setEnteredAuthor(event.target.value);
	};

	return (
		<>
			{modalIsVisible && (
				<Modal onClose={hideModalHandler}>
					<NewPost
						onBodyChange={bodyChangeHandler}
						onAuthorChange={authorChangeHandler}
					/>
				</Modal>
			)}
			<ul className={classes.posts}>
				<Post author={enteredAuthor} body={enteredBody} />
				<Post author="Lena" body="I love React.js!" />
			</ul>
		</>
	);
};

export default PostList;