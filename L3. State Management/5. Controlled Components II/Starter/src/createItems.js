import { useState } from "react";
import PropTypes from "prop-types";

const CreateItems = ({ onAddItem }) => {
	const [value, setValue] = useState("");

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const addItem = (event) => {
		event.preventDefault();
		onAddItem(value);
		setValue("");
	};

	const noItemsFound = () => value === "";

	return (
		<div>
			<form onSubmit={addItem}>
				<input
					type="text"
					placeholder="Enter New Item"
					value={value}
					onChange={handleChange}
				/>
				<button disabled={noItemsFound()}>Add</button>
			</form>
		</div>
	);
};

CreateItems.propTypes = {
	onAddItem: PropTypes.func.isRequired,
};

export default CreateItems;
