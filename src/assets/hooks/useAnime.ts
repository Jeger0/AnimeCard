import { useEffect, useState } from "react";
import type { Anime } from "../types/anime";

export function useAnime() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?page=${page}&limit=9`
        );

        if (!response.ok) {
          throw new Error("API ERROR");
        }
        const data = await response.json();
        setAnimeList(data.data);
      } catch (error) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [page]);

  return { animeList, page, setPage, loading, error };
}
