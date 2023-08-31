export interface Feature {
  index: string;
  level: number;
  class: {
    index: string;
    name: string;
  };
}

export interface FeaturesData {
  data: any;
  features: Feature[];
}