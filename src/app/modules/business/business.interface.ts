import { Model, ObjectId } from 'mongoose';
import { ICategory } from '../category/category.interface';

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

export interface IFaq {
  question: string;
  answer: string;
}

export interface IAvailabilities {
  day: string[];
  startTime: string;
  endTime: string;
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
  faq: IFaq[];
  providerType: ObjectId;
  eventType: ObjectId[] | ICategory[];
  additionalServices: ObjectId[] | ICategory[];
  availabilities: IAvailabilities;
  priceRange: string;
  maxGuest: number;
  address: string;
  location: {
    type: string;
    coordinates: number[];
  };
  isDeleted: boolean;
}

export type IBusinessModules = Model<IBusiness, Record<string, unknown>>;
