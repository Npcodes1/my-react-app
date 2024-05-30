import React from "react";

import { greeting, user } from "./data";
import { albums } from "./data";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <h1>
        {greeting} {user}
      </h1>
      <Search />
      {albums.map((album) => (
        <div>
          <h2>Album: {album.name}</h2>
          <p>Artist: {album.artist.name}</p>
          <ul key={album.id}>
            {album.tracks.map((track) => (
              <div>
                <li>{track.name}</li>
                <li>Length: {track.length}</li>
                <br />
              </div>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
