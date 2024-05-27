import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text) return;
		addTodo({
			id: Date.now(),
			text,
			completed: false,
			date: new Date().toISOString(),
		});
		setText("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center justify-center gap-2 py-2">
			<input
				className="border border-yellow-500 rounded-md p-2 text-[18px] w-[250px]"
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				type="submit"
				className="border text-[16px] p-2 rounded-md border-green-500 hover:bg-green-700 transition-all">
				Add Todo
				
			</button>
		</form>
	);
};

export default TodoForm;
