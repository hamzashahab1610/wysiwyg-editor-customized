import React from "react";
import Minus from "../assets/minus.svg";

function MinusOption(props) {
	console.log("count", props.count);
	const minus = () => {
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
		props.setCount(props.count.filter((item) => item.id !== props.id));
	};
	return (
		<span
			onClick={minus}
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
			<img src={Minus} alt="" width="13px" />
		</span>
	);
}

export default MinusOption;
