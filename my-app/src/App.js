import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h3 style={{ marginTop: "10px" }}>
        User's Details Will be Shown Here : by changing URL
      </h3>

      <Outlet />
    </div>
  );
}

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ maxWidth: "90%", margin: "0 auto" }}
    >
      <a className="navbar-brand" href="#">
        Demo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/users">
              Users
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/products">
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/orders">
              Orders
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;