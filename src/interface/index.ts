export interface Crypto {
  id: number;
  symbol: string;
  name: string;
  slug: string;
  logoUrl: string;
  metrics: Metrics;
  price_usd: number;
}

interface Metrics {
  market_data: Market_data;
}

interface Market_data {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
}
