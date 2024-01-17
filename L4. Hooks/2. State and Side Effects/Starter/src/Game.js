import { useState, useEffect } from "react";

const Game = (props) => {
	const [value1, setValue1] = useState(null);
	const [value2, setValue2] = useState(null);
	const [value3, setValue3] = useState(null);
	const [trueAnswer, setTrueAnswer] = useState(null);

	useEffect(() => {
		let valuesArray = makeNewQuestion();
		setValue1(valuesArray[0]);
		setValue2(valuesArray[1]);
		setValue3(valuesArray[2]);
		setTrueAnswer(valuesArray[3]);
	}, []);

	const makeNewQuestion = () => {
		const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);

		const trueAnswer =
			Math.floor(Math.random() * 3) + (value1 + value2 + value3);

		return [value1, value2, value3, trueAnswer];
	};

	const refresh = (newValuesArray) => {
		setValue1(newValuesArray[0]);
		setValue2(newValuesArray[1]);
		setValue3(newValuesArray[2]);
		setTrueAnswer(newValuesArray[3]);
	};

	const handleAnswer = (event) => {
		const newValuesArray = makeNewQuestion();
		refresh(newValuesArray);
		const answerCorr = evalAnswer(event.target.name);
		props.handleAnswer(answerCorr);
	};

	const evalAnswer = (givenAnswer) => {
		const corrAnswer = value1 + value2 + value3;

		return (
			(corrAnswer === trueAnswer && givenAnswer === "true") ||
			(corrAnswer !== trueAnswer && givenAnswer === "false")
		);
	};

	return (
		<div>
			<div className="equation">
				<p className="text">{`${value1} + ${value2} + ${value3} = ${trueAnswer}`}</p>
			</div>
			<button className="btn btn-success" onClick={handleAnswer} name="true">
				True
			</button>
			<button className="btn btn-danger" name="false" onClick={handleAnswer}>
				False
			</button>
		</div>
	);
};

export default Game;
