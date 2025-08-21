import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  //2 this file facilitate to get a whatever collect we want for the open world from the database as shown below it returns an jSON collection

  const data = await payload.find({
    collection: 'pages'
  })


  return Response.json(data)

  //1 came by default commenting it
  // return Response.json({
  //   message: 'This is an example of a custom route.',
  // })
}
