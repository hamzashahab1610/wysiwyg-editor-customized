import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import AddOption from "./AddOption";
import MinusOption from "./MinusOption";

function Edit(props) {
	const [contentState, setContentState] = useState({});
	const { height, index, id, setCount, count } = props;

	return (
		<div style={{ height: "100%" }}>
			<Editor
				//initialContentState={contentState}
				toolbar={{
					options: [
						"inline",
						"blockType",
						"fontSize",
						"fontFamily",
						"list",
						"textAlign",
						"colorPicker",
						"emoji",
						"image",
						"history",
					],
					inline: {
						inDropdown: false,
						className: undefined,
						component: undefined,
						dropdownClassName: undefined,
						options: ["bold", "italic", "underline", "monospace"],
					},
					list: {
						inDropdown: false,
						className: undefined,
						component: undefined,
						dropdownClassName: undefined,
						options: ["unordered", "ordered"],
					},
					textAlign: {
						inDropdown: false,
						className: undefined,
						component: undefined,
						dropdownClassName: undefined,
						options: ["left", "center"],
					},
				}}
				toolbarClassName="toolbarClassName"
				wrapperClassName="wrapperClassName"
				editorClassName="editorClassName"
				wrapperStyle={{
					padding: "1rem",
					background: "white",
					minHeight: "100%",
					boxSizing: "border-box",
				}}
				toolbarCustomButtons={[
					<AddOption setCount={setCount} count={count} />,
					<MinusOption id={id} setCount={setCount} count={count} />,
				]}
				//onEditorStateChange={this.onEditorStateChange}
			/>
		</div>
	);
}

export default Edit;
