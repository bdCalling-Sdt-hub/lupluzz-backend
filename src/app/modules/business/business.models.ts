import { model, Schema } from 'mongoose';
import {
  IAvailabilities,
  IBusiness,
  IBusinessModules,
  IFaq,
  IGallery,
  ISocialLinks,
} from './business.interface';

const GallerySchema = new Schema<IGallery>({
  url: { type: String, required: true },
  key: { type: String, required: true },
});

const SocialLinksSchema = new Schema<ISocialLinks>({
  facebook: { type: String, default: null },
  instagram: { type: String, default: null },
  twitter: { type: String, default: null },
  tiktok: { type: String, default: null },
});

const FaqSchema = new Schema<IFaq>({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const AvailabilitiesSchema = new Schema<IAvailabilities>({
  day: [{ type: String, required: true }],
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
});

const businessSchema = new Schema<IBusiness>(
  {
    name: { type: String, required: true },
    email: { type: String, required: false },
    phoneNumber: { type: String, required: false },
    website: { type: String, default: null },
    socialLinks: { type: SocialLinksSchema, default: () => ({}) },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    shortDescription: { type: String, default: null },
    description: { type: String, default: null },
    logo: { type: String, default: null },
    coverImage: { type: String, default: null },
    coverColor: { type: String, default: null },
    promotionImage: [GallerySchema],
    gallery: [GallerySchema],
    faq: [FaqSchema],
    providerType: { type: Schema.Types.ObjectId, ref: 'Categories' },
    eventType: [{ type: Schema.Types.ObjectId, ref: 'Categories' }],
    additionalServices: [{ type: Schema.Types.ObjectId, ref: 'Categories' }],
    availabilities: AvailabilitiesSchema,
    priceRange: { type: String, default: null },
    maxGuest: { type: Number, default: 0 },
    address: { type: String, default: null },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true,
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        required: true,
        // longitude, latitude order
      },
    },

    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const Business = model<IBusiness, IBusinessModules>('Business', businessSchema);
export default Business;
