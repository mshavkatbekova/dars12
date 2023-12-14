import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import useLogout from "../hooks/useLogout";
import Create from "./Create";

function Navbar() {
  const { user } = useGlobalContext();
  const { logout } = useLogout();
  console.log();
  return (
    <header className="bg-base-300 py-3">
      <div className="max-container flex flex-col md:flex-row gap-y-3 md:gap-y-0 justify-between items-center">
        <Link
          className="font-bold text-xl md:text-3xl hover:opacity-50 animation"
          to="/"
        >
          My Kitchen
        </Link>
        <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-center font-medium">
          <p>Welcome. {user.displayName}</p>
          <div className="flex gap-2">
            <button
              onClick={logout}
              className="btn btn-sm md:btn-md btn-secondary"
            >
              Logout
            </button>
            <button
              className="btn btn-sm md:btn-md btn-primary"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Create
            </button>
            <Create />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
