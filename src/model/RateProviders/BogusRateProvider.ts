import { RateProvider } from "@/model/RateProvider";

export class BogusRateProvider implements RateProvider {
  // @ts-ignore - initialized in updateRate, but ts not smart enough
  private _rate: number;

  public get rate(): number {
    if (typeof this._rate === "undefined") {
      this.update();
    }
    return this._rate;
  }

  public update(): void {
    this._rate = Math.random() + 1;
  }
}
