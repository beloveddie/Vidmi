import { movies } from "./services/fakeMovieService";
import Table from "./components/Table";

function App() {
  const headers = ["Title", "Genre", "Stock", "Rate"];
  return (
    <div className="App">
      <header className="App-header">Vidly Build</header>
      <Table data={movies} headers={headers} />
    </div>
  );
}

export default App;
