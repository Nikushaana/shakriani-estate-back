import { v2 as CloudinaryType, UploadApiResponse } from 'cloudinary';

export const createUploadStream = (
  cloudinary: typeof CloudinaryType,
  file: Express.Multer.File,
  folder: string,
): Promise<UploadApiResponse> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'auto', // image + video support
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result as UploadApiResponse);
      },
    );

    uploadStream.end(file.buffer);
  });
};