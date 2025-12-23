type AnimeCardsProps = {
  title: string;
  synopsis: string;
  imageUrl: string;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

function AnimeCard({
  title,
  synopsis,
  imageUrl,
  onClick,
  isFavorite,
  onToggleFavorite,
}: AnimeCardsProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer dark:bg-gray-800 dark:text-white rela"
      onClick={onClick}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm line-clamp-3">{synopsis}</p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className="absolute top-2 right-2 text-xl"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default AnimeCard;
