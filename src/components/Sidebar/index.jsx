import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="p-4 w-48 border-r border-gray-200">
      <ul className="flex flex-col gap-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md ${
                isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <span className="material-symbols-outlined">home</span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/important"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md ${
                isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <span className="material-symbols-outlined">star</span>
            Important
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bin"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md ${
                isActive ? "bg-indigo-600 text-white" : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            <span className="material-symbols-outlined">delete</span>
            Bin
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

