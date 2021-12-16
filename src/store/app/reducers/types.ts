export type TAppStatus = 'start' | 'initializing' | 'initialized';

export type TAppOptions = {
  working_hours_start: string;
  working_hours_end: string;
};

export interface IAppState {
  status: TAppStatus;
  boardingCompleted: boolean;
  appOptions: TAppOptions | null;
  loaderVisibility: boolean;
}
