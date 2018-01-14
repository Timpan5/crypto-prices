import { Map } from 'immutable';

export const bitcoinTickers = new Map ({
  Bitfinex: 'tBTCUSD',
  Bittrex: 'USDT-BTC',
  Poloniex: 'USDT_BTC',
  Hitbtc: 'BTCUSD',
  Binance: 'BTCUSDT',
});

export const ethereumTickers = new Map ({
  Bitfinex: 'tETHUSD',
  Bittrex: 'USDT-ETH',
  Poloniex: 'USDT_ETH',
  Hitbtc: 'ETHUSD',
  Binance: 'ETHUSDT',
});
