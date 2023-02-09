import React, { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <div className="max-w-sm mx-auto">
        <h1 className="text-center text-3xl font-bold mb-4">Sergy Todo List</h1>
        <div className="bg-white shadow-md rounded p-4">
          <input
            className="w-full p-2 border-2 border-gray-300 rounded-lg"
            type="text"
            value={newTodo}
            onChange={handleNewTodoChange}
            placeholder="Add a new todo"
          />
          <button
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>
        <ul className="mt-8">
          {todos.map((todo, index) => (
            <li key={index} className="mt-4">
              <div className="bg-white shadow-md p-4 rounded">
                <div className="flex justify-between">
                  <p className="text-gray-700 font-medium">{todo}</p>
                  <button
                    className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
