import PropTypes from "prop-types";
import AddMessage from "./AddMessage";
import ChatHistory from "./ChatHistory";

const ChatWindow = ({ messages, user, onMessage }) => {
	const handleSubmit = (message) => {
		onMessage(user.username, message);
	};

	return (
		<div className="chat-window">
			<h2>Super Awesome Chat</h2>
			<div className="name sender">{user.username}</div>

			<ChatHistory messages={messages} user={user} />

			<AddMessage onMessage={handleSubmit} />
		</div>
	);
};

ChatWindow.propTypes = {
	messages: PropTypes.array.isRequired,
	user: PropTypes.object.isRequired,
	onMessage: PropTypes.func.isRequired,
};

export default ChatWindow;
