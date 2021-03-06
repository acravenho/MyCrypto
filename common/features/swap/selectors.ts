import { AppState } from 'features/reducers';

export const getSwap = (state: AppState) => state.swap;
export const getOrigin = (state: AppState) => getSwap(state).origin;
export const getPaymentAddress = (state: AppState) => getSwap(state).paymentAddress;
export const shouldDisplayLiteSend = (state: AppState) => getSwap(state).showLiteSend;
export const getHasNotifiedRatesFailure = (state: AppState) =>
  getSwap(state).hasNotifiedRatesFailure;
