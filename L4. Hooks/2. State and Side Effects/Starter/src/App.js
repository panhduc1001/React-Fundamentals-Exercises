import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Game from "./Game";
import Score from "./Score";

const App = () => {
	const [corrAnswer, setCorrAnswer] = useState(0);
	const [numQuestions, setNumQuestions] = useState(0);

	const handleAnswer = (answerCorr) => {
		if (answerCorr) {
			setCorrAnswer(corrAnswer + 1);
		}
		setNumQuestions(numQuestions + 1);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>
			<div className="game">
				<h2>Mental Math</h2>
				<Game handleAnswer={handleAnswer} />
				<Score numCorrect={corrAnswer} numQuestions={numQuestions} />
			</div>
		</div>
	);
};

export default App;
