import faker from 'faker';
import { Mappable } from './CustomMap';

// You can use an implements clause to check that a class
// satisfies a particular interface.
// An error will be issued if a class fails to correctly implement it:
export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <div>
      <p>Company:</p>
      <h1>${this.name}</h1>
      <h3>${this.catchPhrase}</h3>
    </div>
    `;
  }
}
