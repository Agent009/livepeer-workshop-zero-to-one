import { Livepeer } from "@livepeer/ai";
import { openAsBlob } from "node:fs";
import { constants } from "./lib/constants.js";

const livepeer = new Livepeer({
  httpBearer: constants.httpBearer,
});

async function run() {
  console.log("Generating image to image...", process.cwd());
  const result = await livepeer.generate.imageToImage({
    image: await openAsBlob(process.cwd() + "/img/example-01.png"),
    prompt: "Convert this image to a painting of a forest at night.",
    modelId: "timbrooks/instruct-pix2pix",
  });

  console.log(result.imageResponse?.images);
}

run();
