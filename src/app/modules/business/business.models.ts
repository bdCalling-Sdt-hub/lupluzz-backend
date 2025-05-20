
import { model, Schema } from 'mongoose';
import { IBusiness, IBusinessModules } from './business.interface';

const businessSchema = new Schema<IBusiness>(
  {
    isDeleted: { type: 'boolean', default: false },
  },
  {
    timestamps: true,
  }
);

//businessSchema.pre('find', function (next) {
//  //@ts-ignore
//  this.find({ isDeleted: { $ne: true } });
//  next();
//});

//businessSchema.pre('findOne', function (next) {
  //@ts-ignore
  //this.find({ isDeleted: { $ne: true } });
 // next();
//});

businessSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const Business = model<IBusiness, IBusinessModules>(
  'Business',
  businessSchema
);
export default Business;