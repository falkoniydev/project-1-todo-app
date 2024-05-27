import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";

const App = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState("all");
	const [currentDate, setCurrentDate] = useState(new Date());

	// Ilova yuklanganda LocalStorage'dan TODO'larni oling
	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
		setTodos(storedTodos);
	}, []);

	// Har safar todos o'zgarganda LocalStorage'ni yangilang
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	// Hozirgi sanani yangilab turish uchun
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDate(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const addTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const removeTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const filteredTodos = todos.filter((todo) => {
		if (filter === "completed") return todo.completed;
		if (filter === "pending") return !todo.completed;
		return true;
	});

	const formatDate = (date) => {
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
		<div className="App">
			<div className="text-center py-2">
				<h1 className="text-yellow-400">{formatDate(currentDate)}</h1>
				<h1 className="text-[56px]">TODO APP</h1>
				<span className="text-[20px]">
					by <strong className="text-yellow-400">Shahboz Nabiyev</strong>
				</span>
			</div>
			<TodoForm addTodo={addTodo} />
			<Filter filter={filter} setFilter={setFilter} />
			<TodoList
				todos={filteredTodos}
				toggleTodo={toggleTodo}
				removeTodo={removeTodo}
			/>
		</div>
	);
};

export default App;
