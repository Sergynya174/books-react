import { Route, Routes } from "react-router-dom";
import Books from "../Books";
import Book from "../Book";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/book/:id" element={<Book />} />
    </Routes>
  );
}

export default App;
