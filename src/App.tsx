import Top from "./page/top";
import Toggle from "./page/toggle";
import Couter from "./page/counter";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <h1>React Custom Hooks</h1>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/couter">Couter</a>
            </li>
            <li>
              <a href="/toggle">Toggle</a>
            </li>
          </ul>
          <Routes>
            <Route path={"/"} element={<Top />} />
            <Route path={"/couter"} element={<Couter />} />
            <Route path={"/toggle"} element={<Toggle />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
