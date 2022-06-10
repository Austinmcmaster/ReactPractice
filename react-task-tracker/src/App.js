import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 2,
        text: "Test",
        day: "Feb 1",
        reminder:true
    }
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000 ) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Remindmer
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? 
  {...task, reminder: !task.reminder}:task  ))
}


  return (
    <div className="container">
      <Header />
      <AddTask onAdd ={addTask}/>
      {tasks.length > 0 ? 
      (<Tasks tasks = {tasks} onDelete = {deleteTask}
      onToggle = {toggleReminder} />) 
      : ("No task to show.")}
    </div>
  );
}

export default App;
