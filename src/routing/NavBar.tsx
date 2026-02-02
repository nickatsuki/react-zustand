// import { useContext } from "react";
import LoginStatus from "../state-management/auth/LoginStatus";
// import TasksContext from "../state-management/tasks/taskContext";
import useCounterStore from "../state-management/counter/store";

const NavBar = () => {
  // const { tasks } = useContext(TasksContext);
  const counter = useCounterStore((s) => s.counter);

  return (
    <nav
      className="navbar navbar-expand-lg flex justify-content-between px-3"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
