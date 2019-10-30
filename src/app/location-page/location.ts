export class Location {
    public id: number;
    public city: string;
    public country: string;
    public climate: string;
    public imageLink: string;
    public continent: string;
    public expediaLink: string;

    public toString() {
      return this.city + ", " + this.country;
    }
}

