import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 2,
        text: "Test",
        day: "Feb 1",
        reminder:true
    }
])

// Delet Task
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
      {tasks.length > 0 ? 
      (<Tasks tasks = {tasks} onDelete = {deleteTask}
      onToggle = {toggleReminder} />) 
      : ("No task to show.")}
    </div>
  );
}

export default App;
