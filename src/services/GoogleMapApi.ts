import ReactNative from 'react-native';

type Point = {
  longitude: number;
  latitude: number;
};

interface GoogleMapApiModuleInterface {
  isPointInArea(point: Point, area: Point[]): Promise<boolean>
}


const { GoogleMapApiModule } = ReactNative.NativeModules;


export default GoogleMapApiModule as GoogleMapApiModuleInterface;
