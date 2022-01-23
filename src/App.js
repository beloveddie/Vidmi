import { movies } from "./services/fakeMovieService";

function App() {
  return (
    <div className="App">
      <header className="App-header">Vidly Build</header>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(
            ({ _id, title, genre, numberInStock, dailyRentalRate }) => (
              <tr key={_id}>
                <td>{title}</td>
                <td>{genre.name}</td>
                <td>{numberInStock}</td>
                <td>{dailyRentalRate}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
