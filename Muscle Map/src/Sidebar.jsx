import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell, faBowlFood, faCog } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <nav className="sidebar">
      <h1>
        <img src="src/assets/Muscle Map Logo.png" alt="logo" id="logo" />
        MuscleMap
      </h1>
      <ul className="menu">
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: isActive ? "85%" : "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  background: isActive ? "rgb(0, 110, 255)" : "transparent",
                  color: isActive ? "#fff" : "inherit",
                  textDecoration: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faDumbbell}
                  style={{ color: isActive ? "#fff" : "rgb(0, 110, 255)" }}
                />
                Training
              </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/meals">
            {({ isActive }) => (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: isActive ? "85%" : "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  background: isActive ? "rgb(0, 110, 255)" : "transparent",
                  color: isActive ? "#fff" : "inherit",
                  textDecoration: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faBowlFood}
                  style={{ color: isActive ? "#fff" : "rgb(0, 110, 255)" }}
                />
                Meals
              </span>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            {({ isActive }) => (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  width: isActive ? "85%" : "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  background: isActive ? "rgb(0, 110, 255)" : "transparent",
                  color: isActive ? "#fff" : "inherit",
                  textDecoration: "none",
                }}
              >
                <FontAwesomeIcon
                  icon={faCog}
                  style={{ color: isActive ? "#fff" : "rgb(0, 110, 255)" }}
                />
                Settings
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
