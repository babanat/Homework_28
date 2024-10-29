import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import TodoList from './components/TodoList';
import NoteFound from "./components/NoteFound";
import ErrorBoundary from './components/ErrorBoundary';



function App() {
  return (
 
      <Router>
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="*" element={<NoteFound />} />
          </Routes>
        </ErrorBoundary>
      </Router>
   
  );
}

export default App;
