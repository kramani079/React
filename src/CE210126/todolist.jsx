import React,{useState} from "react";

export default function ToDoList(){
    const [taskName,setTaskName] = useState("");
    const [task,setTask] = useState([]);

    const addTask = (taskName) => {
        setTask([...task, taskName]);
    }

    const deleteTask = (index) => {
        setTask(task.filter((_, i) => i !== index));
    }

    const editTask = (index, newTaskName) => {
        const updatedTasks = task.map((t, i) => i === index ? newTaskName : t);
        setTask(updatedTasks);
    }

    const handleEdit = (index) => {
        const newTaskName = ("Enter new task name:", task[index]);
        if (newTaskName) {
            editTask(index, newTaskName);
        }
    }

    return(
        <>
        <h1>Task List</h1>
        <input type="text" value={taskName} onChange={(e)=> setTaskName(e.target.value)} placeholder="Enter Task" />
        <button onClick={()=> addTask(taskName)}>Add Task</button>
        <ul>
            {task.map((t, index) => (
                <li key={index}>{t}
                <button onClick={()=> deleteTask(index)}>Delete</button>
                <button onClick={()=> handleEdit(index)}>Edit</button>
                </li>
            ))}
        </ul>
        </>
    )
}