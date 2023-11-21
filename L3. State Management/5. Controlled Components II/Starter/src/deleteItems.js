import PropTypes from "prop-types";

const DeleteItems = ({ onDeleteItem, buttonDisabled }) => {
	const deleteItem = (event) => {
		onDeleteItem();
	};

	return (
		<div>
			<button disabled={buttonDisabled} onClick={deleteItem}>
				Delete item
			</button>
		</div>
	);
};

DeleteItems.propTypes = {
	onDeleteItem: PropTypes.func.isRequired,
	buttonDisabled: PropTypes.func.isRequired,
};

export default DeleteItems;
