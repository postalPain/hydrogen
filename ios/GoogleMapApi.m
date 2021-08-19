#import <React/RCTBridgeModule.h>
#import <GoogleMaps/GoogleMaps.h>

@interface RCTGoogleMapApiModule : NSObject <RCTBridgeModule>@end

struct TPoint {
  double longitude;
  double latitude;
};

@implementation RCTGoogleMapApiModule
// To export a module named RCTGoogleMapApiModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(isPointInArea:(NSDictionary *)pointParam
                  area: (NSArray *)areaParam
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  struct TPoint point;
  point.latitude = [[pointParam valueForKey: @"latitude"] doubleValue];
  point.longitude = [[pointParam valueForKey: @"longitude"] doubleValue];
  CLLocationCoordinate2D c2D = CLLocationCoordinate2DMake(point.latitude, point.longitude);
  
  GMSMutablePath *path = [GMSMutablePath path];
  int i;
  for(i = 0; i < (sizeof areaParam); i++) {
    NSDictionary *pointDict = areaParam[i];
    struct TPoint currentPoint;
    
    currentPoint.latitude = [[pointDict valueForKey: @"latitude"] doubleValue];
    currentPoint.longitude = [[pointDict valueForKey: @"longitude"] doubleValue];
    [path  addCoordinate:CLLocationCoordinate2DMake(currentPoint.latitude, currentPoint.longitude)];
  }
  BOOL isInArea = GMSGeometryContainsLocation(c2D, path, YES);
  
  resolve(@(isInArea));
}
@end
