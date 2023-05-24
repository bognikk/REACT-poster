import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.scss";

const PostList = ({ isPosting, onStopPosting }) => {
	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} />
				</Modal>
			)}
			<ul className={classes.posts}>
				<Post author="Lena" body="I love React.js!" />
			</ul>
		</>
	);
};

export default PostList;
