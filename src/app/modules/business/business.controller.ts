
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';  
import { businessService } from './business.service';
import sendResponse from '../../utils/sendResponse';
import { storeFile } from '../../utils/fileHelper';
import { uploadToS3 } from '../../utils/s3';

const createBusiness = catchAsync(async (req: Request, res: Response) => {
 const result = await businessService.createBusiness(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Business created successfully',
    data: result,
  });

});

const getAllBusiness = catchAsync(async (req: Request, res: Response) => {

 const result = await businessService.getAllBusiness(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All business fetched successfully',
    data: result,
  });

});

const getBusinessById = catchAsync(async (req: Request, res: Response) => {
 const result = await businessService.getBusinessById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Business fetched successfully',
    data: result,
  });

});
const updateBusiness = catchAsync(async (req: Request, res: Response) => {
const result = await businessService.updateBusiness(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Business updated successfully',
    data: result,
  });

});


const deleteBusiness = catchAsync(async (req: Request, res: Response) => {
 const result = await businessService.deleteBusiness(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Business deleted successfully',
    data: result,
  });

});

export const businessController = {
  createBusiness,
  getAllBusiness,
  getBusinessById,
  updateBusiness,
  deleteBusiness,
};