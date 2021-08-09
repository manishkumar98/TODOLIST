import React, { useEffect, useState } from "react";
import { Filters } from "./components/Filters";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "./components/TodoItem";
import { initialTodos } from "./mocked";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);
  const [descriptionQuery, setDescriptionQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("Office");
  const [currentCategory, setCurrentCategory] = useState("Office");

  useEffect(() => {
    setFilteredTodos(filterTodos(todos, currentCategory));
  }, [currentCategory, todos]);

  const addTodo = () => {
    if (descriptionQuery.length > 0 && categoryQuery.length > 0) {
      setDescriptionQuery("");
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          description: descriptionQuery,
          category: categoryQuery,
          isDone: false
        }
      ]);
      filterTodos(todos, currentCategory);
    }
  };

  const toggleIsCompleted = (id) => {
    const tempTodos = [...todos];
    const currentTodo = tempTodos.find((todo) => todo.id === id);
    currentTodo.isDone = !currentTodo.isDone;
    setTodos(tempTodos);
  };

  const changeFilter = (selectedCategory) => {
    setCurrentCategory(selectedCategory);
  };

  const filterTodos = (allTodoItems, currentCategory) => {
    return allTodoItems.filter((todo) => todo.category === currentCategory);
  };

  const TodoListJSX = filteredTodos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} toggleIsCompleted={toggleIsCompleted} />
  ));

  return (
    <div className="App">
      <section className="column">
        <h1>Todo</h1>
        <ul>{TodoListJSX}</ul>
        <div className="add-item">
          <input
            value={descriptionQuery}
            onChange={(e) => setDescriptionQuery(e.target.value)}
            placeholder="add a task..."
          />
          <input
            value={categoryQuery}
            onChange={(e) => setCategoryQuery(e.target.value)}
          />
          <span
            role="img"
            aria-label="+"
            className="plus"
            onClick={() => addTodo()}
          >
            {" "}
            ➕
          </span>
        </div>
      </section>
      <section className="column">
        <Filters
          todos={todos}
          changeFilter={changeFilter}
          currentCategory={currentCategory}
        />
      </section>
    </div>
  );
};

export default App;

//var React=require('react')
/*import React, { useState } from "react";
import ReactDOM from "react-dom";
const [inputList, setInputList] = useState();
const [items, setItems] = useState([]);
const itemEvent = (event) => {
  setInputList(event.target.value);
};
const listOfItems = () => {
  setItems((oldItems) => {
    return [...oldItems, inputList];
  });
  setInputList("");
};
ReactDOM.render(
 

    <>
  
        <h1> TODO List</h1>
      
        <input type="text" placeholder="Add an item" onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>
        <ol>
          {items.map((itemval) => {
            return <li>{itemval}</li>;
          })}
        </ol>
      
    </>
  
,document.getElementById('root'));*/
