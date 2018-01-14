export function selectCurrentCoin(state) {
  return state ? state.get('currentCoin') : 'BTC';
}
