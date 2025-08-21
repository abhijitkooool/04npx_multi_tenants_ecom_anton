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
  ]
};

