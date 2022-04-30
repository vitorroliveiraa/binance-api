import { publicCall } from './api';

class ListCurrentAveragePrice {

  async getPrice(symbol: string) {
    const queryPath = '/v3/avgPrice';

    const price = await publicCall(queryPath, { symbol });

    return price;
  }
}

export { ListCurrentAveragePrice };
