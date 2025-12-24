import AnimeCard from "./assets/components/AnimeCard";
import ThemeToggle from "./assets/components/ThemeToggle";
import Modal from "./assets/components/Modal";
import { useState, useEffect } from "react";

import type { Anime } from "./assets/types/anime";
import { useAnime } from "./assets/hooks/useAnime";
import { useTheme } from "./assets/hooks/useTheme";
import { useFavorites } from "./assets/hooks/useFavorites";

function App() {
  const { animeList, page, setPage, loading, error } = useAnime();
  const { dark, toggle } = useTheme();
  const { favorites, toggleFavorite } = useFavorites();

  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  const displayedAnime = showFavorites
    ? animeList.filter((anime) => favorites.includes(anime.mal_id))
    : animeList;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 transition">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center dark:text-white">
          Anime Cards
        </h1>
        <div className="flex flex-row p-4 justify-between items-center m-2">
          <button
            onClick={() => setShowFavorites((prev) => !prev)}
            className="px-4 py-2 rounded
          bg-gray-900 text-white hover:bg-gray-700
          dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
          >
            {showFavorites ? "Show All" : "Show Favorites"}
          </button>

          <ThemeToggle dark={dark} onToggle={toggle} />
        </div>

        {error && <p>{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {displayedAnime.map((anime) => (
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
          <Modal onClose={() => setSelectedAnime(null)}>
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
                className="mt-2 px-4 py-2 rounded
          bg-gray-900 text-white hover:bg-gray-700
          dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </Modal>
        )}
        <div className="flex justify-center gap-4 my-6">
          <button
            disabled={page === 1 ? true : false}
            className="px-4 py-2 rounded
          bg-gray-900 text-white hover:bg-gray-700
          dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </button>

          <button
            disabled={page === 20 ? true : false}
            className="
px-4 py-2 rounded
          bg-gray-900 text-white hover:bg-gray-700
          dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
