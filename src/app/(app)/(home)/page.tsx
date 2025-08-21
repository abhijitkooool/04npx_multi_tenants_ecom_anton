// D5.1 as shown in "src/app/my-route/route.ts" we import "configPromise", "getPayload" 
import configPromise from "@payload-config";
import { getPayload } from "payload";

// D5.2 convert it to an async function
export default async function Home() {
  // D5.3 we establish a connection with getPayload by passing configPromise
  const payload = await getPayload({
    config: configPromise,
  })

  // D5.4 bring in the collection of categories
  const data = await payload.find({
    collection: "categories",
  })

  return (
    // D5.5 display using JSON.stringify
    <div>
      {JSON.stringify(data,null,2)}
    </div>
  );
}
