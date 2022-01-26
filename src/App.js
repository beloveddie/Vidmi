import { useState } from "react";
import { movies } from "./services/fakeMovieService";
import Table from "./components/Table";
import Nav from "./components/Nav";
import Notification from "./components/Notification";
import Alert from "./components/Alert";

function App() {
  const headings = ["Title", "Genre", "Stock", "Rate"],
    brand = "Vidly";

  // state values
  const [data, setData] = useState(movies);
  return (
    <div className="App">
      <Nav
        brand={brand}
        notification={<Notification data={data} dataName="Movies" />}
      />
      {data.length ? (
        <Table data={data} headings={headings} setData={setData} />
      ) : (
        <Alert data="movies" />
      )}
    </div>
  );
}

export default App;
