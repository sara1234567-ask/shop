import React, { useState, useEffect } from "react";

export default function MusicHomework() {
  const [query, setQuery] = useState("eminem");   
  const [tracks, setTracks] = useState([]);       
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);      

  function searchMusic(artist) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://itunes.apple.com/search?term=${artist}&entity=song&limit=5`);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const json = JSON.parse(xhr.responseText);
        if (json.results.length === 0) {
          setError("Нет результатов");
        } else {
          setError(null);
        }
        setTracks(json.results);
      } else {
        setError("Ошибка загрузки");
      }
      setLoading(false);
    };

    xhr.onerror = () => {
      setError("Ошибка AJAX");
      setLoading(false);
    };

    setLoading(true);
    xhr.send();
  }

  
  useEffect(() => {
    searchMusic(query);
  }, []);

  return (
    <div>
      <h2>🎵 Music Finder (AJAX)</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Введите артиста"
      />
      <button onClick={() => searchMusic(query)}>Поиск</button>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {tracks.map((t) => (
          <li key={t.trackId}>
            <img src={t.artworkUrl60} alt={t.trackName} />
            <strong>{t.artistName}</strong> — {t.trackName}
            <br />
            <audio controls src={t.previewUrl}></audio>
          </li>
        ))}
      </ul>
    </div>
  );
}
