import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-blue-500 p-4 flex items-center justify-around">
            <h1 className="text-3xl font-bold text-white">My Application</h1>
            <nav>
                <Link to="/register" className="mr-10 text-lg text-white hover:underline">Register</Link>
                <Link to="/todolist" className="text-lg text-white hover:underline">Todo List</Link>
            </nav>
        </header>
    );
}

export default Header;


