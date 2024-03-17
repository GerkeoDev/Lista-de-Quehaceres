import { useState } from "react"
export function Main(){
    const [tasks, setTasks] = useState([])
    const [taskInput, setTaskInput] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault()
        setTasks([...tasks, {name:taskInput, finished: false}])
        setTaskInput("")
    }
    const handleChangeTask = (e) => {
        setTaskInput(e.target.value)
    }
    const handleChangeCheck = (index) => {
        const updatedTasks = [...tasks]
        updatedTasks[index].finished = !updatedTasks[index].finished
        setTasks(updatedTasks)
    }
    const deleteTask = (deletable) => {
        setTasks(tasks.filter((task, index)=> index !== deletable))
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="task-input" value={taskInput} onChange={handleChangeTask}/>
                </div>
                <input type="submit" value={"Add"} />
            </form>
            <div>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <span>
                            <label className={task.finished? "finished": ""}>
                                {task.name}
                                <input type="checkbox" onChange={() => handleChangeCheck(index)} value={task.finished}/>
                            </label>  
                        </span>
                        <span>
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}