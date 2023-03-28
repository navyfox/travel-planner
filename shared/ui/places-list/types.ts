export interface ITopPlace {
  id: string;
  name: string;
  description: string;
  link?: string;
}

export interface IPlacesList {
  places?: ITopPlace[];
}
