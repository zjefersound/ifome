import ISanityImage from "./ISanityImage";

export default interface ICategory {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
  image: ISanityImage;
  name: string;
}
