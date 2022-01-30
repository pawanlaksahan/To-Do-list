import React from 'react';

const Form=({setInputText,inputText,todos,setTodos})=>{
    const inputHandler=(e)=>{

         
        setInputText(e.target.value);
    }
    const submitTodoHandler=(e)=>{

   e.preventDefault();
   setTodos([
       ...todos,
       { text:inputText, completed:false, id:Math.random()*1000}
   ]);
   setInputText("");
    };

    const stateHandler=(e)=>{
        console.log(e);

    }
    return(
        <form>
        <input value={inputText} onChange={inputHandler}  type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={stateHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}
export default Form;