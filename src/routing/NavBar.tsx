import { useContext } from "react";
import TasksContext from "../state-management/contexts/taskContext";
import LoginStatus from "../state-management/LoginStatus";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <nav
      className="navbar navbar-expand-lg flex justify-content-between px-3"
      style={{ background: "#f0f0f0", marginBottom: "1rem" }}
    >
      <span className="bage text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
