import classes from "./NewPost.module.scss";
import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

const NewPost = () => {
	return (
		<Modal>
			<Form className={classes.form} method="post">
				<p>
					<label htmlFor="body">Text</label>
					<textarea id="body" required rows={3} name="body" />
				</p>
				<p>
					<label htmlFor="name">Your name</label>
					<input type="text" id="name" required name="author" />
				</p>
				<p className={classes.actions}>
					<Link to=".." type="button">
						Cancel
					</Link>
					<button>Submit</button>
				</p>
			</Form>
		</Modal>
	);
};

export default NewPost;

export const action = async ({ request }) => {
	const formData = await request.formData();
	const postData = Object.fromEntries(formData); // {body: '...', author: '...'}

	await fetch("http://localhost:8080/posts", {
		method: "POST",
		body: JSON.stringify(postData),
		headers: {
			"Content-Type": "application/json",
		},
	});

	return redirect("/");
};
