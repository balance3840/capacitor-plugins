import { registerPlugin } from '@capacitor/core';
import { Marker } from './map';

import type { GoogleMapConfig } from './definitions';

export interface CreateMapArgs {
  id: string;
  apiKey: string;
  config: GoogleMapConfig;
  forceCreate?: boolean;
}

export interface DestroyMapArgs {
  id: string;
}

export interface RemoveMarkerArgs {
  id: string;
  markerId: number;
}

export interface AddMarkerArgs {
  id: string;
  marker: Marker
}

export interface CapacitorGoogleMapsPlugin {
  create(args: CreateMapArgs): Promise<void>;
  addMarker(args: AddMarkerArgs): Promise<number>;
  removeMarker(args: RemoveMarkerArgs): Promise<void>;
  destroy(args: DestroyMapArgs): Promise<void>;
}

export const CapacitorGoogleMaps = registerPlugin<CapacitorGoogleMapsPlugin>(
  'CapacitorGoogleMaps',
  {
    web: () => import('./web').then(m => new m.CapacitorGoogleMapsWeb()),
  },
);
