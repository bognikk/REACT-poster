import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.scss";

const PostList = () => {
	return (
		<>
			<NewPost />
			<ul className={classes.posts}>
				<Post author="Nikola" body="React.js is awesome!" />
				<Post author="Lena" body="I love React.js!" />
			</ul>
		</>
	);
};

export default PostList;
