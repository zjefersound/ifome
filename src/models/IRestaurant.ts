import IDish from "./IDish";
import ISanityImage from "./ISanityImage";

export default interface IRestaurant {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  address: string;
  dishes: IDish[];
  image: ISanityImage;
  lat: number;
  long: number;
  name: string;
  rating: number;
  short_description: string;
  type: {
    name: string;
  };
}
