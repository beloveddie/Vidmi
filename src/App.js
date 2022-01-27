import { useState } from "react";
import { movies } from "./services/fakeMovieService";
import Nav from "./components/Nav";
import Notification from "./components/Notification";
import PaginatedData from "./components/PaginatedData";

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
      <PaginatedData
        itemsPerPage={3}
        items={data}
        headings={headings}
        setData={setData}
      />
    </div>
  );
}

export default App;
