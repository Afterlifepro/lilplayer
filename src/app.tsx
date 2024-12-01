import { createLilInstance } from "./createLilplayer";
// adding comment to trigger github action

async function main() {
  const lilInstance = createLilInstance({
    width: 0,
    height: 0,
  });

  new Spicetify.Topbar.Button(
    "Lilplayer",
    "tablet",
    lilInstance.open
  )
}

export default main;
