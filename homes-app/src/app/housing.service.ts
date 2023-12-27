import { Injectable } from "@angular/core";
import { HousingLocation } from "./housinglocation";

//Injectable() decorator marks a class as available to an injector for instantiation.
//typeScript class decorator that marks a class as available to be provided and injected as a dependency.

@Injectable({
  providedIn: "root",
})
export class HousingService {
  url = "http://localhost:3000/locations";

  constructor() {}

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: Number
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Application submitted for ${firstName} ${lastName} at ${email}`
    );
  }
}
