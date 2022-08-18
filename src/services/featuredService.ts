import sanityClient from "../config/sanity";
import IFeatured from "../models/IFeatured";

const getAll: () => Promise<IFeatured[]> = () => {
  return sanityClient.fetch(`*[_type == "featured"]{
    ...,
    restaurants[] -> {
      ...,
      dishes[] -> {
        ...
      },
      type -> {
        name
      }
    }
  }`);
};

export default {
  getAll
}