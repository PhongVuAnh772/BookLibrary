import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Page/Home/Home.jsx";
import DetailBook from "./Page/DetailBook/DetailBook.jsx";
import ListBookByCategory from "./Page/ListBookByCategory/ListBookByCategory";
import RegisterCard from "./Page/RegisterCard/RegisterCard";
import ListBookSearch from "./Page/ListBookSearch/ListBookSearch";
import TopBook from "./Page/TopBook/TopBook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/detailbook" element={<DetailBook />}></Route>
            <Route
              path="/bookbycategory"
              element={<ListBookByCategory />}
            ></Route>
            <Route path="/registercard" element={<RegisterCard />}></Route>
            <Route path="/listbooksearch" element={<ListBookSearch />}></Route>
            <Route path="/topbook" element={<TopBook />}></Route>

            <Route path="*" element={<Navigate to="/home" />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
