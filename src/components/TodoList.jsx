import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
	<ul className="overflow-auto w-[1000px] h-[400px] px-5 mx-auto">
		{todos.length > 0 ? (
			todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
					removeTodo={removeTodo}
				/>
			))
		) : (
			<h1 className="text-center text-2xl font-bold py-20 text-gray-600">
				No todos to show
			</h1>
		)}
	</ul>
);

export default TodoList;
