export type TAppStatus = 'start' | 'initializing' | 'initialized';
export type TRatePopupStatus = null | 'rejected' | 'completed';

export interface IAppState {
  status: TAppStatus;
  boardingCompleted: boolean;
  loaderVisibility: boolean;
  launchCount: number;
  lastRatePopupStatus: TRatePopupStatus;
}
