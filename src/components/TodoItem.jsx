import React from "react";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
		};
		return date.toLocaleDateString("en-US", options);
	};

	return (
		<div className="flex items-center justify-between pb-2 mb-2 border-b-2">
			<li
				style={{
					textDecoration: todo.completed ? "line-through" : "none",
					color: todo.completed ? "gray" : "white",
				}}>
				<label className="flex items-center gap-3">
					<div>
						{todo.completed ? (
							<FaCheckSquare onClick={() => toggleTodo(todo.id)} />
						) : (
							<FaRegSquare onClick={() => toggleTodo(todo.id)} />
						)}
					</div>
					<div className="text-[18px]">{todo.text}</div>
				</label>
			</li>
			<div className="flex items-center gap-2">
				<small
					style={{
						textDecoration: todo.completed ? "line-through" : "none",
						color: todo.completed ? "gray" : "white",
					}}
					className="text-[12px]">
					{formatDate(todo.date)}
				</small>
				<button
					className="px-[24px] py-[4px] border rounded-md border-red-600 text-[16px] hover:bg-red-600 transition-all"
					onClick={() => removeTodo(todo.id)}>
					Remove
				</button>
			</div>
		</div>
	);
};

export default TodoItem;
