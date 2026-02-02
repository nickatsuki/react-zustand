import { TaskProvider } from "./state-management/tasks";
import Counter from "./state-management/counter/Counter";
import NavBar from "./routing/NavBar";
import HomePage from "./routing/HomePage";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <Counter />
      <NavBar />
      <HomePage />
    </TaskProvider>
  );
}

export default App;
