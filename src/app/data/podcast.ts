import { Artist } from './artist';
import { Topic } from './topic';

export class Podcast {
  id!: number;
  title!: string;
  descrption!: string;
  artists!: Artist[];
  topics!: Topic[];
}

export class CreatePodcast {
  title!: string;
  descrption!: string;
  artistIDs!: string[];
  topicIds!: string[];
}

export class UpdatePodcast {
  id!: number;
  title!: string;
  descrption!: string;
  artistIDs!: string[];
  topicIds!: string[];
}
