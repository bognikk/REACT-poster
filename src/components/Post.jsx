import classes from "./Post.module.scss";

const Post = ({ author, body }) => {
	return (
		<div className={classes.post}>
			<p className={classes.author}>{author}</p>
			<p className={classes.text}>{body}</p>
		</div>
	);
};

export default Post;
