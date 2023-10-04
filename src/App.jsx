import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
