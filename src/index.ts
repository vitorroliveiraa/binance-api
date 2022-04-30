import * as dotenv from 'dotenv';

import { time } from './api';

import { ListCurrentAveragePrice } from './ListCurrentAveragePrice';
import { ListOrderBook } from './ListOrderBook';

dotenv.config();

setInterval(async () => {
  // const result = await depth();

  const listCurrentAveragePrice = new ListCurrentAveragePrice();
  const listOrderBook = new ListOrderBook();

  const { price } = await listCurrentAveragePrice.getPrice('GMTUSDT');
  console.log(`ℹ️ Preço médio atual: ${price}`);

  const { purchases, sales } = await listOrderBook.orderBookDetails(
    'GMTUSDT',
    5,
    false
  );
  console.log(
    `🔺Compra mais alta: U$${purchases} | 🔻Venda mais baixa: ${sales}`
  );

  const buy = Number(purchases);
  const sell = sales;

  // if (sell < 3.63) {
  //   console.log('💥Hora de comprar!💥');
  //   console.log('-------------------');
  // } else if (buy > 3.65) {
  //   console.log('💥💥💥Hora de vender!💥💥💥');
  //   console.log('--------------------------');
  // } else {
  //   console.log('Aguardar!');
  //   console.log('---------');
  // }
}, Number(process.env.CRAWLER_INTERVAL));
