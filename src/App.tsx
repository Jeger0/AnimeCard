import AnimeCard from "./assets/components/AnimeCard";
import ThemeToggle from "./assets/components/ThemeToggle";
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
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  /* Manages favorite anime IDs and persistence */
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  /* Manages dark mode state and persistence */
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  function toggleFavorite(id: number) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  }

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  /* Fetches data from the API */
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.jikan.moe/v4/anime?limit=9");
        const data = await response.json();
        setAnimeList(data.data);
      } catch (error) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  /* Returns error, loading or the cards if the data has been fetched*/
  return (
    <div className="p-4 bg-white dark:bg-gray-800 transition">
      <ThemeToggle dark={dark} onToggle={() => setDark(!dark)} />

      {error && <p>{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {animeList.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              title={anime.title}
              synopsis={anime.synopsis}
              imageUrl={anime.images.jpg.image_url}
              onClick={() => setSelectedAnime(anime)}
              isFavorite={favorites.includes(anime.mal_id)}
              onToggleFavorite={() => toggleFavorite(anime.mal_id)}
            />
          ))}
        </div>
      )}
      {selectedAnime && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 ">
          <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden dark:bg-gray-800 dark:text-white">
            <img
              src={selectedAnime.images.jpg.image_url}
              alt={selectedAnime.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{selectedAnime.title}</h2>

              <p className="text-sm mb-4">{selectedAnime.synopsis}</p>

              <button
                onClick={() => setSelectedAnime(null)}
                className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
