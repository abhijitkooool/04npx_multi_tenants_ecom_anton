import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  //D6.1 adding access prop for the extending functionality of access control based on role of the user
  access: {
    // create: ()=>false,
    // read: ()=>false,
    // update: ()=>false,
    // delete: ({req})=> req.user.isAdmin, // destructuring the request, & check
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      // e1.1
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      // e1.2
      name: "color",
      type: "text",
    },
    {
      // e1.3 we give each category a parent, which is a type of is relationship, it has a relation to itself i.e. a category, // and hasMay is set to false, i.e. a subcategory will have only one parent category // it not going to be required // if a category does not have a parent that implies it is a parent category
      name: "parent",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
    },
    {
      name: "subcategories",
      type: "join",
      collection: "categories",
      on: "parent",
      hasMany: true,
    },
  ]
};

