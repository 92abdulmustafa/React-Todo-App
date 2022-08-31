import React, { useState } from "react";

const Todo = () => {
  const [index, setIndex] = useState(null);
  const [todoInput, setTodoInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const addItem = () => {
    setToDoList([...toDoList, todoInput]);
    setTodoInput("");
  };

  const updateItem = () => {
    toDoList[index] = todoInput;
    setToDoList([...toDoList]);
    setTodoInput("");
    setIndex(null);
  };

  const editItem = (index, value) => {
    setIndex(index);
    setTodoInput(value);
    
  };

  const deleteItem = (index)=>{
    toDoList.splice(index,1)
    setToDoList([...toDoList]);
  }

  const checkIndex = index !== null;

  return (
    <>
      <div className="grid place-items-center align-middle">
        <h1 className="py-5 text-2xl font-bold ">Todo App</h1>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (checkIndex) {
              updateItem();
            } else {
              addItem();
            }
          }}
        >
          <div className="w-80 h-12 border-2 border-neutral-400 rounded-md mt-5 flex justify-between">
            <input
              type="text"
              placeholder="Add Item"
              className="border-none w-full 12 text-center"
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <i
              className={`fa-solid ${
                checkIndex ? "fa-square-check" : "fa-plus"
              } mt-4 mr-3`}
              onClick={checkIndex ? updateItem : addItem}
              title={checkIndex ? "Update Todo Item" : "Add Todo Item"}
            ></i>
          </div>
        </form>
        <div className="mt-5">
          {!toDoList.length ? (
            <div>
              <p className="font-semibold text-lg">Please enter todo list</p>
            </div>
          ) : (
            toDoList.map((v, i) => {
              return (
                <div className="mt-8 flex space-x-5 justify-center place-items-center shadow-lg shadow-slate-600 drop-shadow-md border-gray-500 rounded-md w-80 h-14">
                  <p className="font-semibold ">{v}</p>
                  <i
                    className="fa-solid fa-edit text-xs"
                    title="Edit Todo Item"
                    onClick={() => editItem(i, v)}
                  ></i>
                  <i
                    className="fa-solid fa-trash-alt text-xs"
                    title="Delete Todo Item"
                    onClick={()=>deleteItem(i)}
                  ></i>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Todo;