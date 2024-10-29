// src/components/TodoList.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const todoSchema = z.object({
    task: z.string().min(5, "Task must be at least 5 characters"),
});

function TodoList() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(todoSchema),
    });
    const [todos, setTodos] = useState([]);

    const onSubmit = (data) => {
        setTodos([...todos, { id: Date.now(), text: data.task, completed: false }]);
        reset(); 
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const clearCompletedTodos = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Todo List</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex mb-4">
                <input
                    type="text"
                    {...register("task")}
                    className="border border-gray-300 p-2 flex-grow mr-2"
                    placeholder="Введите задачу..."
                />
                {errors.task && <p className="text-red-500 text-xs mr-5">{errors.task.message}</p>} {/* Отображение ошибки */}

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
            </form>
            <ul className="list-none p-0 mb-4">
                {todos.map(todo => (
                    <li key={todo.id} className={`p-2 border-b cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`} onClick={() => toggleTodo(todo.id)}>
                        {todo.text}
                    </li>
                ))}
            </ul>
            <button className="bg-red-500 text-white px-4 py-2 rounded mx-auto block" onClick={clearCompletedTodos}>
                Clear Completed
            </button>
        </div>
    );
}

export default TodoList;


