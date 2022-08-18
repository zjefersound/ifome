import sanityClient from "../config/sanity";
import ICategory from "../models/ICategory";

const getAll: () => Promise<ICategory[]> = () => {
  return sanityClient.fetch(`*[_type == "menuCategory"]{
    ...,
  }`);
};

export default {
  getAll
}