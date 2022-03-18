export interface RateProvider {
  readonly rate: number;

  update(): void;
}
