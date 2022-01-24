import { movies } from "./services/fakeMovieService";

function App() {
  return (
    <div className="App">
      <header className="App-header">Vidly Build</header>
      <table className="table table-striped container">
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
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
