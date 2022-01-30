import React from 'react';
import Todo from './Todo';

const TodoList=({todos,setTodos,filteresTodos})=>{
    return(
        <div className="todo-container">
      <ul className="todo-list">
  
          {
              filteresTodos.map((todo)=>(
                  <Todo key={todo.id} text={todo.text}
                  todos={todos} setTodos={setTodos} todo={todo}/>
              ))
          }
      </ul>
    </div>
    );
}
    export default TodoList;