import { Model, ObjectId } from 'mongoose';

export interface IGallery {
  url: string;
  key: string;
}
export interface ISocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
  tiktok: string;
}

export interface IFsq {
  question: string;
  answer: string;
}

export interface IBusiness {
  name: string;
  email: string;
  phoneNumber: string;
  website: string;
  socialLinks: ISocialLinks;
  author: ObjectId;
  shortDescription: string;
  description: string;
  logo: string;
  coverImage: string;
  coverColor: string;
  promotionImage: IGallery[];
  gallery: IGallery[];
  fsq: IFsq[];
  providerType: string;
  eventType: string[];
  additionalServices: string[];
  priceRange: string;
  maxGuest: number;
  address: string;
  location: {
    type: string;
    coordinates: number[];
  };
}

export type IBusinessModules = Model<IBusiness, Record<string, unknown>>;
