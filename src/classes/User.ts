import faker from 'faker';

export class User {
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
