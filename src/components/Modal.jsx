import classes from "./Modal.module.scss";

const Modal = ({ children }) => {
	return (
		<>
			<div className={classes.backdrop} />
			<dialog open className={classes.modal}>
				{children}
			</dialog>
		</>
	);
};

export default Modal;
