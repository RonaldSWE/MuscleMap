import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faBowlFood, faCog } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/Muscle Map Logo.png";

function Sidebar() {
  return (
    <nav className="sidebar">
      <h1>
        <img src={logo} alt="logo" id="logo" />
        MuscleMap
      </h1>
      <ul className="menu">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            <FontAwesomeIcon icon={faDumbbell} className="icon" />
            <span className="label">Training</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/meals" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            <FontAwesomeIcon icon={faBowlFood} className="icon" />
            <span className="label">Meals</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? 'menu-link active' : 'menu-link')}>
            <FontAwesomeIcon icon={faCog} className="icon" />
            <span className="label">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
