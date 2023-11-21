import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import CreateItem from "./createItems";
import DeleteItem from "./deleteItems";
import ItemList from "./listItems";

const App = () => {
	const [items, setItems] = useState([]);

	const addItem = (item) => {
		setItems([...items, item]);
	};

	const deleteItem = (event) => {
		setItems(items.slice(0, -1));
	};

	const noItemsFound = () => items.length === 0;

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">ReactND - Coding Practice</h1>
			</header>

			<h2>Shopping List</h2>

			{/* <form onSubmit={addItem}>
				<input
					type="text"
					placeholder="Enter New Item"
					value={value}
					onChange={handleChange}
				/>
				<button disabled={inputIsEmpty()}>Add</button>
			</form> */}

			<CreateItem onAddItem={addItem} />

			{/* <button onClick={deleteLastItem} disabled={noItemsFound()}>
				Delete Last Item
			</button> */}

			<DeleteItem onDeleteItem={deleteItem} buttonDisabled={noItemsFound()} />

			{/* <p className="items">Items</p>
			<ol className="item-list">
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ol> */}

			<ItemList items={items} />
		</div>
	);
};

export default App;
