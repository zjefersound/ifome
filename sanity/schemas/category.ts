export default {
  name: "category",
  title: "Dish category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image of Category",
      type: "image",
    },
  ],
};
