import {MongoObservable} from 'meteor-rxjs';

export interface Link {
  _id?: string;
  title: string;
  url: string;
  createdAt: Date;
}

export const Links = new MongoObservable.Collection<Link>('links');
