import "./App.css";
import AnimeCard from "./assets/components/AnimeCard";

function App() {
  const animeList = [
    {
      id: 1,
      title: "Naruto",
      description: "A ninja who wants to become Hokage",
    },
    {
      id: 2,
      title: "Attack on Titan",
      description: "Humanity fights against Titans",
    },
    {
      id: 3,
      title: "One Piece",
      description: "Pirates searching for the ultimate treasure",
    },
  ];

  return (
    <div>
      {animeList.map((anime) => (
        <AnimeCard
          key={anime.id}
          title={anime.title}
          description={anime.description}
        />
      ))}
    </div>
  );
}

export default App;
