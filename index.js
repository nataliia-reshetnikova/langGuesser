import { franc } from "franc";
import { iso6393 } from "iso-639-3";
import colors from "colors";

const input = process.argv[2];
const isoLangCode = franc(input);

const language = iso6393.find((element) => element["iso6393"] === isoLangCode);
if (!!language) {
  console.log(`Our best guess is: ${language.name}`.rainbow);
} else {
  console.log(`Sorry, try with another sample text`.bgRed);
}
