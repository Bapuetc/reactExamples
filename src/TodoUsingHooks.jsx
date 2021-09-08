import React,{useState} from 'react'

const TodoUsingHooks = () => {
    const [taskName,setTaskName]=useState('');
    const [taskArray,setTaskArray]=useState([]);

    const setTask=(e)=>{
        setTaskName(e.target.value)
    }

    const taskArr=()=>{
        let arr=taskArray;
        arr.push(taskName);
        setTaskArray(arr);
        setTaskName('');
        console.log(taskArray);
    }

    const handleDel=(e)=>{
        let arr=taskArray;
        console.log(arr);
        arr.splice(e.target.id,1);
        setTaskArray(arr);
    }

    return (
        <div classname="components">
            <h2>Todo using Hooks</h2>
            <input type="text" placeholder="Enter the Task Name" onChange={setTask} value={taskName} />
            <button onClick={taskArr} >Add Task</button>
            {taskArray.map((v,i)=><h4 key={i} >{v}<button id={i} onClick={handleDel}>delete</button></h4>)}
        </div>
    )
}
export default TodoUsingHooks
