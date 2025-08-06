import MovieDetails from "./Components/MovieDetails";
import MoviesList from "./Components/MoviesList";
import NavBar from "./Components/NavBar";
import { BrowserRouter,Routes , Route } from "react-router-dom";



function App() {
  return (
    <div className="">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
