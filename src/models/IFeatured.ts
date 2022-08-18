import IRestaurant from "./IRestaurant";

export default interface IFeatured {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  name: string;
  restaurants: IRestaurant[];
  short_description: string;
}
