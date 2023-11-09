import Input from "./FORM/Input.js"
import Button from "./FORM/Button.js"
import { Fragment, useState } from "react"

const TodoInput = () => {

  const [inputTask, setInputTask] = useState('');
  const [list,setList] = useState([])

  console.log("list : ",list)
 
  const [editing,setEditing] = useState(false)
  const [currentEditingTodo, setCurrentEditingTodo] = useState(0);
 
  const [checked, setChecked] = useState(false) // false, l'objet n'est pas sélectionné. True l'objet est sélectionné.

  const handleChangeInput = (event) => {
    setInputTask(event.target.value);
  }

  const handleAddTodo = (index) => {
    const newTask = {
        id: Math.random() * 10,
        todo: inputTask,
        done:checked
    };

    setList([...list, newTask])    
    setInputTask('') // clear input fiel when user clicked button.

  } 
  
  const handleChangeCheck = (index) => {
   setChecked(!checked); 
   list[index].done = !checked
  }


  const handleDeleteTask = (id) => {
   
    const newList = list.filter((todo) => todo.id !== id)
    setList(newList)
  }

  const handleEditing = (id) => {
    setInputTask('')
    setEditing(!editing);
    setCurrentEditingTodo(id);

  }

  const handleEditTodo = (index) => {
   
   
    list[index].todo=inputTask;

    setInputTask('') 
    setEditing(false);
  } 

 
   
  return (  
    <Fragment>   
      <div className="container">
        <h2>My to do list</h2>

        <Input 
        type="text"
        placeholder= {editing ? "Edit Task" : "Add Task"}
        value={inputTask}
        onChange = {handleChangeInput}
        />
          
        <Button 
        className = "button-btn"
        onClick = {editing ?  () => handleEditTodo(currentEditingTodo) : () => handleAddTodo()}

        >{editing ? "Edit Task" : "Add Task"}</Button>


      <Button 
        className = "button-btn">New Task</Button>

              <ul>
            {list.map((todo,index) => (
              
                <li key={index} className="task" id={index} style={{textDecoration: todo.done === true ? "line-through" :"none" }}>
                  
                  {todo.todo}
                  <Input
                type="checkbox"
                name="mark-task"
                value={checked}
                id={index}
                done = {checked.toString()}
                onChange = {() => handleChangeCheck(index)}
                />

                <Button className="delete-button" onClick={() => handleDeleteTask(todo.id)}>Delete</Button>

                <Button className="edit-button" id={index} onClick={() => handleEditing(index)}>Edit</Button>
                </li>
            ))}
          </ul>
        </div>
    </Fragment>

  )
}
export default TodoInput;