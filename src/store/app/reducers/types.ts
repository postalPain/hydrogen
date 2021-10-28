export type TAppStatus = 'start' | 'initializing' | 'initialized';

export interface IAppState {
  status: TAppStatus;
  boardingCompleted: boolean;
}
