import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AssetsService {
  constructor() {}

  /**
   *
   * @returns array of monthNames
   */
  Monthes() {
    return [
      "January ",
      "February ",
      "March ",
      "April ",
      "May ",
      "June ",
      "July ",
      "August ",
      "September ",
      "October ",
      "November ",
      "December "
    ];
  }
}
