import { movies } from "./services/fakeMovieService";
import Table from "./components/Table";
import Nav from "./components/Nav";

function App() {
  const headings = ["Title", "Genre", "Stock", "Rate"],
    brand = "Vidly | The fake movie service App";
  return (
    <div className="App">
      <Nav brand={brand} />
      <Table data={movies} headings={headings} />
    </div>
  );
}

export default App;
