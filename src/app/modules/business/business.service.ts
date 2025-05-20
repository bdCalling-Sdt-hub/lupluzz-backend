
import httpStatus from 'http-status';
import { IBusiness } from './business.interface';
import Business from './business.models';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../error/AppError';

const createBusiness = async (payload: IBusiness) => {
  const result = await Business.create(payload);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create business');
  }
  return result;
};

const getAllBusiness = async (query: Record<string, any>) => {
query["isDeleted"] = false;
  const businessModel = new QueryBuilder(Business.find(), query)
    .search([])
    .filter()
    .paginate()
    .sort()
    .fields();

  const data = await businessModel.modelQuery;
  const meta = await businessModel.countTotal();

  return {
    data,
    meta,
  };
};

const getBusinessById = async (id: string) => {
  const result = await Business.findById(id);
  if (!result && result?.isDeleted) {
    throw new Error('Business not found!');
  }
  return result;
};

const updateBusiness = async (id: string, payload: Partial<IBusiness>) => {
  const result = await Business.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new Error('Failed to update Business');
  }
  return result;
};

const deleteBusiness = async (id: string) => {
  const result = await Business.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete business');
  }
  return result;
};

export const businessService = {
  createBusiness,
  getAllBusiness,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
};