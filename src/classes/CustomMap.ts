// We are making a custom map class from the google maps,
// to limit access to google maps functions, for safety.
import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: User | Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }

  addMarkerDelight(location: { lat: number; lng: number }): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: location.lat,
        lng: location.lng,
      },
    });
  }
}
