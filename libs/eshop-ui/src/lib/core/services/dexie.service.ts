import Dexie from 'dexie';

export class DexieService extends Dexie {
  constructor() {
    super('EShopDataBase');
    this.version(2).stores({
      cart: 'id,name,description,image,price,quantity',
    });
  }
}
