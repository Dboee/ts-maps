import faker from 'faker';
import { Mappable } from './CustomMap';

// You can use an implements clause to check that a class
// satisfies a particular interface.
// An error will be issued if a class fails to correctly implement it:
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName() + ' ' + faker.name.lastName();
    // for the location object, we need to first initialize location,
    // before we can define latitude and longitude.
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  // A function property on a class is called a method.
  markerContent(): string {
    return `
    <div>
      <p>Person:</p>
      <h3>${this.name}</h3>
    </div>
    `;
  }
}
