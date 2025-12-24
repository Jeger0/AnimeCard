export type AnimeCardsProps = {
  title: string;
  synopsis: string;
  imageUrl: string;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};
