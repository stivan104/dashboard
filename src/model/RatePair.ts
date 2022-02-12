import { RateProvider } from "@/model/RateProvider";

export class RatePair {
  private rateProvider: RateProvider;
  private readonly _codeFrom: string;
  private readonly _codeTo: string;

  constructor(codeFrom: string, codeTo: string, rateProvider: RateProvider) {
    this.rateProvider = rateProvider;
    this._codeFrom = codeFrom;
    this._codeTo = codeTo;
  }

  public get rate(): number {
    return this.rateProvider.rate;
  }

  public get uid(): string {
    return this._codeFrom + "->" + this._codeTo;
  }

  public updateRate(): void {
    this.rateProvider.update();
  }
}
