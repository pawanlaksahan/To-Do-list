import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[inputText,setInputText]=useState("");
  const[Todos,setTodos]=useState([]);
  return (
    <div className='App'>
      <Form inputText={inputText} todos={Todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList todos={Todos} setTodos={setTodos}/>
    </div>
    
  );
}

export default App;
