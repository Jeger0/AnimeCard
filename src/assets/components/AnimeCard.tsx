type AnimeCardsProps = {
  title: string;
  description: string;
};

function AnimeCard(props: AnimeCardsProps) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default AnimeCard;
