import PropTypes from "prop-types";

const ChatHistory = ({ messages, user }) => {
	return (
		<ul className="message-list">
			{messages.map((message, index) => (
				<li
					key={index}
					className={
						message.username === user.username
							? "message sender"
							: "message recipient"
					}
				>
					<p>{`${message.username}: ${message.text}`}</p>
				</li>
			))}
		</ul>
	);
};

ChatHistory.propTypes = {
	messages: PropTypes.array.isRequired,
	user: PropTypes.object.isRequired,
};

export default ChatHistory;
