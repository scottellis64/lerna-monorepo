export interface FeedType {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAltText: string;
  text: string;
  liked: boolean;
}

export interface FeedUpdateLike {
  id: number;
  liked: boolean;
}
