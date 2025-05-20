import { model, Schema } from 'mongoose';
import { IAddRequests, IAddRequestsModules } from './addRequests.interface';

const addRequestsSchema = new Schema<IAddRequests>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  },
);

//addRequestsSchema.pre('find', function (next) {
//  //@ts-ignore
//  this.find({ isDeleted: { $ne: true } });
//  next();
//});

//addRequestsSchema.pre('findOne', function (next) {
//@ts-ignore
//this.find({ isDeleted: { $ne: true } });
// next();
//});

addRequestsSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const AddRequests = model<IAddRequests, IAddRequestsModules>(
  'AddRequests',
  addRequestsSchema,
);
export default AddRequests;
