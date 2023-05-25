import { Link } from "react-router-dom";
import classes from "./Post.module.scss";

const Post = ({ id, author, body }) => {
	return (
		<Link to={id} className={classes.post}>
			<p className={classes.author}>{author}</p>
			<p className={classes.text}>{body}</p>
		</Link>
	);
};

export default Post;
