import logo from "./logo.svg";
import "./App.css";
import AddMessage from "./AddMessage";
import ChatHistory from "./ChatHistory";
import ChatWindow from "./ChatWindow";
import { useState } from "react";

const users = [{ username: "Amy" }, { username: "John" }];

const messages = [
	{ username: "Amy", text: "Hi, Jon!" },
	{ username: "Amy", text: "How are you?" },
	{ username: "John", text: "Hi, Amy! Good, you?" },
];

const App = () => {
	const [messages, setMessages] = useState([]);

	const onMessage = (username, message) => {
		const newMessage = {
			username: username,
			text: message,
		};

		setMessages(messages.concat([newMessage]));
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>
			<div className="container">
				{users.map((user) => (
					<ChatWindow
						key={user.username}
						user={user}
						messages={messages}
						onMessage={onMessage}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
