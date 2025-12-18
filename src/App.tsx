import "./App.css";
import AnimeCard from "./assets/components/AnimeCard";
import { useState, useEffect } from "react";

type Anime = {
  mal_id: number;
  title: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
};

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.jikan.moe/v4/anime")
      .then((res) => res.json())
      .then((data) => {
        setAnimeList(data.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        animeList.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            title={anime.title}
            synopsis={anime.synopsis}
            imageUrl={anime.images.jpg.image_url}
          />
        ))
      )}
    </div>
  );
}

export default App;
