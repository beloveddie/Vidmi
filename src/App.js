import { movies } from "./services/fakeMovieService";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <header className="App-header">Vidly Build</header>
      <Table data={movies} />
    </div>
  );
}

export default App;
