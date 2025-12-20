type AnimeCardsProps = {
  title: string;
  synopsis: string;
  imageUrl: string;
};

function AnimeCard(props: AnimeCardsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={props.imageUrl}
        alt={props.title}
        className="w-full h-48 object-cover"
      />

      <div>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{props.synopsis}</p>
      </div>
    </div>
  );
}

export default AnimeCard;
