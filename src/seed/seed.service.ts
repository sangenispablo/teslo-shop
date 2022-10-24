import { Injectable } from '@nestjs/common';

import { ProductsService } from './../products/products.service';

import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(private readonly productService: ProductsService) {}

  async runSeed() {
    await this.inserNewProducts();
    return `Seed executed`;
  }

  private async inserNewProducts() {
    this.productService.deleteAllProduct();
    const products = initialData.products;
    const insertPromises = [];

    products.forEach((producto) => {
      insertPromises.push(this.productService.create(producto));
    });

    await Promise.all(insertPromises);

    return true;
  }
}
