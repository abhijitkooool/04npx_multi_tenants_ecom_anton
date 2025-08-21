import type { CollectionConfig } from "payload";

export const Tags: CollectionConfig = {
  slug: "tags",
  fields: [
    {
      name: "name",
      type: "text",
    },
  ]
};

