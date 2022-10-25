import { join } from 'path';

import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';

@Injectable()
export class FilesService {
  getStaticProductImage(imageName: string) {
    const pathFile = join(__dirname, '../../static/products', imageName);
    if (!existsSync(pathFile)) {
      throw new BadRequestException(`No product found with image ${imageName}`);
    }
    return pathFile;
  }
}
