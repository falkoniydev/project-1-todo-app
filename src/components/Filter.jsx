import React from "react";

const Filter = ({ filter, setFilter }) => {
	const getButtonStyle = (currentFilter) => ({
		color: filter === currentFilter ? "yellow" : "white",
		marginRight: "10px",
		cursor: "pointer",
	});

	return (
		<div className="flex items-center gap-5 justify-center mb-3">
			<button style={getButtonStyle("all")} onClick={() => setFilter("all")}>
				All
			</button>
			<button
				style={getButtonStyle("completed")}
				onClick={() => setFilter("completed")}>
				Completed
			</button>
			<button
				style={getButtonStyle("pending")}
				onClick={() => setFilter("pending")}>
				Pending
			</button>
		</div>
	);
};

export default Filter;
