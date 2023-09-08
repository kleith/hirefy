import {
  faClipboard,
  faHouse,
  faPeopleGroup,
  faQuestion,
  faShapes,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import { Sidebar } from "./components/Sidebar";
import logo from "./logo.avif";

function App() {
  const menu = [
    {
      name: "Home",
      icon: faHouse,
    },
    { name: "How it works", icon: faQuestion },
    {
      name: "Marketplace",
      icon: faPeopleGroup,
    },
    {
      name: "For Talents",
      icon: faClipboard,
    },
    {
      name: "Categories",
      icon: faShapes,
    },
    {
      name: "Lorem ipsum",
      children: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
        },
      ],
    },
    {
      name: "Lorem ipsum 1",
      children: [
        {
          name: "Lorem ipsum",
        },
        {
          name: "Lorem ipsum",
          children: [
            {
              name: "Lorem ipsum",
            },
            {
              name: "Lorem ipsum",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="App">
      <div className="Sidebar">
        <header>
          <img src={logo} alt="logo" />
          Hirefy
        </header>
        <aside>
          <Sidebar menu={menu} />
        </aside>
        <footer>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
            <li>Version</li>
          </ul>
          <p>&copy; 2023 Hirefy, LLC.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
