export interface Game {
  id: string;
  title: string;
  sortName: string;
  publisherName: string;
  contentRatings?: ContentRatings | null;
  genres: string[];
  images: Images;
}

export interface ContentRatings {
  categoryKey: string;
  type: string;
}

export interface Images {
  GAME_BOX_ART: string;
  HERO_IMAGE?: string;
  KEY_ART?: string;
  TV_BANNER?: string;
}
