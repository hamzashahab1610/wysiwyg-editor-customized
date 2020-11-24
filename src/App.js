import "./App.css";
import React, { useState } from "react";
import Editor from "./components/Editor";
import { v4 as uuid } from "uuid";

function App() {
	const [count, setCount] = useState([{ id: uuid() }]);
	const [height, setHeight] = useState();
	return (
		<div className="App">
			<h1>Editor App</h1>
			<div
				style={{
					background: "#f1f1f1",
					border: "1px solid black",
					display: "flex",
					flexWrap: "wrap",
					width: "calc(100% - 32px)",
					margin: "1rem auto",
				}}
			>
				{count.map((x, i) => (
					<div
						style={{
							flex: "3 1 30%",
							margin: "1px",
						}}
					>
						<Editor
							height={height}
							index={i}
							id={x.id}
							setCount={setCount}
							count={count}
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
