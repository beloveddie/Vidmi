import { useState } from "react";
import { movies } from "./services/fakeMovieService";
import Table from "./components/Table";
import Nav from "./components/Nav";

function App() {
  const headings = ["Title", "Genre", "Stock", "Rate"],
    brand = "Vidly | The fake movie service App";

  // state values
  const [data, setData] = useState(movies);
  return (
    <div className="App">
      <Nav brand={brand} />
      <Table data={data} headings={headings} setData={setData} />
    </div>
  );
}

export default App;
