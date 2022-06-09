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


  return (
    <div className="container">
      <Header />
      <Tasks tasks = {tasks} onDelete = {deleteTask} />
    </div>
  );
}

export default App;
