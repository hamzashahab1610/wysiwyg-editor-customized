import React from "react";
import Plus from "../assets/plus.svg";
import { v4 as uuid } from "uuid";

function AddOption(props) {
	console.log("count", props.count);
	const add = () => {
		// const { editorState, onChange } = props;
		// const contentState = Modifier.replaceText(
		// 	editorState.getCurrentContent(),
		// 	editorState.getSelection(),
		// 	"⭐",
		// 	editorState.getCurrentInlineStyle(),
		// );
		// onChange(() => {
		// 	props.setCount(props.count + 1);
		// 	EditorState.push(editorState, contentState, "insert-characters");
		// });
		props.setCount([...props.count, { id: uuid() }]);
	};
	return (
		<span
			onClick={add}
			style={{
				border: "1px solid #f1f1f1",
				padding: "5px",
				minWidth: "25px",
				borderRadius: "2px",
				margin: "0 4px",
				height: "20px",
				cursor: "pointer",
			}}
		>
			<img src={Plus} alt="" width="13px" />
		</span>
	);
}

export default AddOption;
