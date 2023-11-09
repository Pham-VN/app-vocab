import Input from './FORM/Input.js';
import {Container, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from './FORM/Button.js';
import {useState } from 'react';
import { FaTrash, FaPen } from "react-icons/fa";
import "./todo.css"

const AddDeleteEditTodo = () => {

  const [inputValue,setInputValue] = useState('')
  const [list, setList] = useState([])
  const [editing,setEditing] = useState(false)
  const [currentEditingTodo, setCurrentEditingTodo] = useState(0);

  // const [objetTest, setObjetTest] =  useState([])

  const [inputStatus, setInputStatus] = useState('')

  // const newTestList = list
  // const newTestObjet = objetTest
  // const newTestAdd2aRRAY = [...list,...objetTest]
  // const newTestAdd2aRRAYPhuongPHap2 = [...objetTest, list]
  // console.log("newTestObjet :", newTestObjet)
  // console.log("newTestList :", newTestList)
  // console.log("add two array :", newTestAdd2aRRAY)
  // console.log("add two array 2:", newTestAdd2aRRAYPhuongPHap2)



  //Edit Tag
  const handleEditing = (id) => {
    setInputValue('')
    setEditing(!editing);
    setCurrentEditingTodo(id);

  }

  const handleEditTodo = (index) => {
   
   
    list[index].todo=inputValue;
    // list[index].status = selectedStatus;
    setInputValue('') 
    setEditing(false);
  } 


  // Add tag
  const handleSetValue = (event) => {
    setInputValue(event.target.value)
  }

  
  const handleAddTodo = () => {

    if(inputValue !== "") {
      const newTask = 
      {
        id:list.length+1,
        todo:inputValue,
        time: new Date().toLocaleString(),
        // status : selectedStatus,
      }
    
    
    setList([...list, newTask]);
    setInputValue('') ;
    } else {
      alert("TODO text please!");
    }
  }
 
  const handleDeleteTask = (index) => {
    const newList = list.filter((todo) => todo.id !== index);
    setList(newList)
  }
  
  // const handleKeyDown = (event) => {
  //   if(event.key === "Enter"){  
  //    handleAddTodo()
  //   }
  // }


//   const handleChangeID = (event) => {
    

//     const index = event.target.selectedIndex;
//     const indexElement = event.target.childNodes[index].id;
//     const titleElement = event.target.childNodes[index].value;


//     const newObjet = {
//       id: indexElement,
//       titleElement: titleElement,
     
//     }

//     setObjetTest([...objetTest,newObjet])



// }
  
const handleChangeStatus = (e) => {
  setInputStatus(e.target.value)
}
  return (
    
    <Container>
      
      <h2 style={{color: 'blue'}}>Create New Task</h2>
      
      <div className="form-input-text">

      <Input
        className ="add-edit-task"
        type="text"
        value={inputValue}
        placeholder= {editing ? "Edit Task" : "Add Task"}
        onChange = {handleSetValue}
        // onKeyDown = {handleKeyDown}

      ></Input>

      <Button className = "button-add-edit" onClick = {editing ?  () => handleEditTodo(currentEditingTodo) : () => handleAddTodo()}>{editing ? "Edit Task" : "Add Task"}</Button>

      </div>

      <p className='status'> Choisir Status {
       <select name="selectedStatus"  onChange={handleChangeStatus}>
          <option id = "null"   value="Null">---</option>
          <option id = "notStarted"   value="Not Started">Not started</option>
          <option id = "started"      value="Started">Started</option>
          <option id = "inProgresse"  value="In progresse">In Progresse</option>
          <option id = "finished"     value="Finished">Finished</option>
      </select>
      }</p>

      <Table className='table-todo'>

<thead>
        <tr>
          <th>Nom de Tâche</th>
          <th>Temps</th>
          <th>Edit</th>
          <th>Effacer</th>
          <th>Status</th>
          {/* <th>ID Select</th> */}
        </tr>
</thead>
<tbody>

  {list.map((todo,index) => (
    <tr className="task" key={todo.id} >
      <td>{todo.todo}</td>
      <td>{todo.time}</td>
      <td>
        <Button 
        id={index}
        onClick={() => handleEditing(index)}>
        <FaPen/></Button>
        </td>
    <td>   
      <Button 
        id= {index} 
        onClick={() =>handleDeleteTask(todo.id)}>
        <FaTrash/></Button> 
      </td>
      <td>{inputStatus}</td>
      {/* <td>{todo.idSelect}</td> */}
    </tr>
    ))
}
  </tbody>
      </Table>
    </Container>
  )
}


export default AddDeleteEditTodo;