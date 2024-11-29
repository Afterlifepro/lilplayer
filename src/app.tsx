import { createLilInstance } from "./openLilplayer";

async function main() {
  const lilInstance = createLilInstance();

  new Spicetify.Topbar.Button(
    "Lilplayer",
    "tablet",
    lilInstance.open
  )

  console.log(Spicetify)
}

export default main;
