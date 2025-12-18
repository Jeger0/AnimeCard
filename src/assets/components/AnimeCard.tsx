type AnimeCardsProps = {
  title: string;
  synopsis: string;
};

function AnimeCard(props: AnimeCardsProps) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.synopsis}</p>
    </div>
  );
}

export default AnimeCard;
