import PropTypes from "prop-types";
import { useState } from "react";

const AddMessage = ({ onMessage }) => {
	const [message, setMessage] = useState("");

	const handleInputChange = (event) => {
		const { value } = event.target;
		setMessage(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onMessage(message);
		setMessage("");
	};

	const isDisabled = () => {
		return message === "";
	};

	return (
		<div>
			<form className="input-group" onSubmit={handleSubmit}>
				<input
					type="text"
					className="form-control"
					placeholder="Enter your message..."
					value={message}
					onChange={handleInputChange}
				/>
				<div className="input-group-append">
					<button className="btn submit-button" disabled={isDisabled()}>
						SEND
					</button>
				</div>
			</form>
		</div>
	);
};

AddMessage.propTypes = {
	message: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired,
};

export default AddMessage;
