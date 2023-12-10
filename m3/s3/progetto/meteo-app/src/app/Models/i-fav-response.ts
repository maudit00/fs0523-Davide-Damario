import { Coord } from "./i-geo";

export interface IFavResponse {
  id: string;
  userdId:string;
  city:string;
  coord:Coord;
}
