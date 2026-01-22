import { useReducer } from "react";
import tasksReducer from "./state-management/reducers/taskReducer";
import TasksContext from "./state-management/contexts/taskContext";
import NavBar from "./routing/NavBar";
import HomePage from "./routing/HomePage";
import "./App.css";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  );
}

export default App;
