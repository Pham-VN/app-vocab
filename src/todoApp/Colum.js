import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Input from './FORM/Input.js';
import Button from 'react-bootstrap/Button';

const arrayColumns = [
  { id: 'td', title: 'TO DO', tasks: [{id: 1, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'}] },
  { id: 'ip', title: 'IN PROGRESS', tasks: [{id: 1, content: 'Demo task2', time: '04/15/2019, 9:25:35 PM'},{id: 2, content: 'Demo task2', time: '04/15/2019, 9:25:35 PM'},{id: 3, content: 'Demo task2', time: '04/15/2019, 9:25:35 PM'}] },
  { id: 'de', title: 'DONE', tasks: [{id: 1, content: 'Demo task3', time: '04/15/2019, 9:25:35 PM'}] }
]

// arrayColumns[0].tasks[2] = {id: 2, content: 'Test task3', time: '04/15/2019, 9:25:35 PM'};

// const TodoInput = () => {
//   const [inputTask, setInputTask] = useState('');
//   const [time,setTime] = useState('');

//   const [listNewTasks, setNewTasks] = useState({
//       id:'',
//       title: '',
//       tasks : [
//         {
//           id:0,
//           content:{inputTask},
//           time:''
//         }
//       ]
//     })    
  
//   const idTask = 0;
  
//   const handleChangeInput = (event) => {
//     setInputTask(event.target.value)
//   }
//   const addNewTask = () => {
//     const newtime = new Date().toLocaleTimeString();
//     setTime(newtime);
//     const newTask = {
//       id: idTask++,
//       content:{inputTask},
//       time:setTime(newtime)
//     }
//   }


// }



function ContainerExample() {
    return (
      <Container>
        <h2>My to do list</h2>
        <Input 
        type="text"
        placeholder = "Add Task"
        // value = {inputTask}
        // onChange = {handleChangeInput}
        >
        </Input>
        <Button
        variant="outline-primary">New Task</Button>
        <Row>
        {arrayColumns.map((column,index) => (
         <Col className='col-sm'  id={index} key={column.id}>
         <div className="card" >
             <div className="card-body">
                 <h2 className="card-title">{column.title}</h2>
                <div className='cart-list-todo'>
                 <ol>
                  {column.tasks.map((task, index) => (
                    <li id={task.id} key={index}>{task.content} {task.time}</li>
                  ))}
                  </ol> 
                  
                </div>
             </div>
             </div>
            </Col>
              ))
            }     
          </Row>
      </Container>
    );
  }
  
export default ContainerExample;