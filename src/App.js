import React,{useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const[inputText,setInputText]=useState("");
  const[Todos,setTodos]=useState([]);
  const[state,setstate]=useState("all");
  const[filteresTodos,setfiltersTodos]=useState([]);

  useEffect(()=>{
    filterHandler();
  },[Todos,state]);

  const filterHandler=()=>{
    switch(state){
      case "completed":
        setfiltersTodos(Todos.filter((todo)=>todo.completed===true))
        break;
        
        case "uncompleted":
          setfiltersTodos(Todos.filter((todo)=>todo.completed===false))
          break;
          default:
            setfiltersTodos(Todos);
            break;
          
        
    }
  }
  return (
    <div className='App'>
      <Form inputText={inputText} todos={Todos} setTodos={setTodos} setInputText={setInputText} setstate={setstate}/>
      <TodoList todos={Todos} setTodos={setTodos} filteresTodos={filteresTodos}/>
    </div>
    
  );
}

export default App;
