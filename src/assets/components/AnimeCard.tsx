type AnimeCardsProps = {
  title: string;
  synopsis: string;
  imageUrl: string;
  onClick: () => void;
};

function AnimeCard(props: AnimeCardsProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer dark:bg-gray-800 dark:text-white"
      onClick={props.onClick}
    >
      <img
        src={props.imageUrl}
        alt={props.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm line-clamp-3">{props.synopsis}</p>
      </div>
    </div>
  );
}

export default AnimeCard;
