import { publicCall } from './api';

class ListOrderBook {
  async orderBookDetails(symbol: string, limit = 5, multipleOrders?: boolean) {
    const queryPath = '/v3/depth';

    const orderBook = await publicCall(queryPath, { symbol, limit });

    if (!multipleOrders) {
      const orders = {
        purchases: `U$${orderBook.bids[0][0]} - Qtd.:${orderBook.bids[0][1]}`,
        sales: `U$${orderBook.asks[0][0]} - Qtd.:${orderBook.asks[0][1]}`,
      };

      return orders;
    }

    return orderBook;
  }
}

export { ListOrderBook };
