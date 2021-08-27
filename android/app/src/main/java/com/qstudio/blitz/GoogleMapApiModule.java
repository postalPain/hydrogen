package com.qstudio.blitz;
import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.google.android.gms.maps.model.LatLng;
import com.google.maps.android.PolyUtil;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.HashMap;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;


public class GoogleMapApiModule extends ReactContextBaseJavaModule {
    GoogleMapApiModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "GoogleMapApiModule";
    }

    @ReactMethod
    public void isPointInArea(ReadableMap pointParam, ReadableArray areaParam, Promise promise) {
        LatLng point = new LatLng(pointParam.getDouble("latitude"), pointParam.getDouble("longitude"));
        List<LatLng> area = new ArrayList<LatLng>();

        for (int i = 0; i < areaParam.size(); i++) {
            ReadableMap currentAreaPointMap = areaParam.getMap(i);
            LatLng currentAreaPoint = new LatLng(currentAreaPointMap.getDouble("latitude"), currentAreaPointMap.getDouble("longitude"));
            area.add(currentAreaPoint);
        }

        Boolean isInArea = PolyUtil.containsLocation(point, area, true);
        promise.resolve(isInArea);
    }
}
