import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  });

  //2 this file facilitate to get a whatever collect we want for the open world from the database as shown below it returns an jSON collection

  const data = await payload.find({
    collection: "categories",
    // depth: 0, //flat, array of only ids of subcategories
    depth: 1, //populates all the fields of all the 
    pagination:false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  // E9.2 next we are going to format the data so as to get an object of the top level categories and another object of the immediate children i.e. the subcategories object. // E9.3 for that we are using the spread operator
  const formattedData = data.docs.map((doc) => ({
    // E9.4 the first doc collection from the data is mapped using a spread operator
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // E9.5 then the subcategories are processed but as subcategories for a top level category is optional i.e. its doc collection may either be a string or array, it needs to be considered
      ...doc,
    })),
  }));

  console.log({
    data,
    formattedData,
  });

  return Response.json({
    data,
    formattedData
  });

  //1 came by default commenting it
  // return Response.json({
  //   message: 'This is an example of a custom route.',
  // })
}
