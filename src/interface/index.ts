export interface Crypto {
  id: number;
  symbol: string;
  name: string;
  slug: string;
  market_data: Market_data;
  Asset: Asset;
}

interface Asset {
  id: string;
  symbol: string;
  name: string;
  slug: string;
}

interface Market_data {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
}
