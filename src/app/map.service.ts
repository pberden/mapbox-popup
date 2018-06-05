import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// import { GeoJson } from './map';
import * as mapboxgl from 'mapbox-gl';

@Injectable()
export class MapService {

  constructor() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }
}
