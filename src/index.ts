import * as dotenv from 'dotenv';

import { time } from './api';

dotenv.config();

setInterval(async () => {
  console.log(await time());
}, Number(process.env.CRAWLER_INTERVAL));
