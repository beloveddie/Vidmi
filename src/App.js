import { movies } from "./services/fakeMovieService";
import Table from "./components/Table";

function App() {
  const headings = ["Title", "Genre", "Stock", "Rate"];
  return (
    <div className="App">
      <header className="App-header">Vidly Build</header>
      <Table data={movies} headings={headings} />
    </div>
  );
}

export default App;
