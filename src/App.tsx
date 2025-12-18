import "./App.css";
import AnimeCard from "./assets/components/AnimeCard";
import { useState, useEffect } from "react";

type Anime = {
  mal_id: number;
  title: string;
  synopsis: string;
};

function App() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime")
      .then((res) => res.json())
      .then((data) => {
        setAnimeList(data.data);
      });
  }, []);

  return (
    <div>
      {animeList.map((anime) => (
        <AnimeCard
          key={anime.mal_id}
          title={anime.title}
          synopsis={anime.synopsis}
        />
      ))}
    </div>
  );
}

export default App;
