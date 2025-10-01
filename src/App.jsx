import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MusicHomework from "./MusicHomework";

function Home() {
  return <h2>Главная страница</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link> | <Link to="/music">Music</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<MusicHomework />} />
      </Routes>
    </Router>
  );
}

export default App;



 




