import { Route, Routes, useLocation } from "react-router-dom";
import Books from "../Books";

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Books />} />
    </Routes>
  );
}

export default App;
