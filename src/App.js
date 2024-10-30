import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';
import TodoList from './components/TodoList';
import NoteFound from "./components/NoteFound";
import MyErrorBoundary from './components/ErrorBoundary';



function App() {
  return (
 
      <Router>
        <Header />
        <MyErrorBoundary>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="*" element={<NoteFound />} />
          </Routes>
        </MyErrorBoundary>
      </Router>
   
  );
}

export default App;
