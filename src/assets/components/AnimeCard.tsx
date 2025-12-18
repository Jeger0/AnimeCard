type AnimeCardsProps = {
  title: string;
  synopsis: string;
  imageUrl: string;
};

function AnimeCard(props: AnimeCardsProps) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.synopsis}</p>
      <img src={props.imageUrl} alt={props.title} />
    </div>
  );
}

export default AnimeCard;
