import { Inject, Injectable } from '@nestjs/common';
import { v2 as CloudinaryType, UploadApiResponse  } from 'cloudinary';
import { createUploadStream } from './helpers/upload-stream.helper';

@Injectable()
export class CloudinaryService {
    constructor(
        @Inject('CLOUDINARY')
        private readonly cloudinary: typeof CloudinaryType,
    ) { }

    async uploadFile(
        file: Express.Multer.File,
        folder = 'default',
    ): Promise<UploadApiResponse> {
        return createUploadStream(this.cloudinary, file, folder);
    }

    async deleteFile(publicId: string, resourceType: 'image' | 'video' = 'image') {
        return this.cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType,
        });
    }

    async uploadMultiple(files: Express.Multer.File[], folder = 'default') {
        return Promise.all(files.map((file) => this.uploadFile(file, folder)));
    }
}
