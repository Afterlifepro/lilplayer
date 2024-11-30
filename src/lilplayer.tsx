import React from "react";
import GrabBar from "./components/grabBar";
import Viewer from "./components/viewer";
import Playback from "./components/playback";
import Controls from "./components/controls";
import "./styles.css";

export default function LilPlayer() {
  const [song, setSong] = React.useState(Spicetify.Player.data);
  const [isPlaying, setIsPlaying] = React.useState(
    Spicetify.Player.isPlaying()
  );
  const [progress, setProgress] = React.useState(
    Spicetify.Player.getProgressPercent()
  );
  const [accent, setAccent] = React.useState<Uint8ClampedArray | "err">("err");

  // done like this rather than using event bc the event could be undefined
  Spicetify.Player.addEventListener("songchange", () =>
    setSong(Spicetify.Player.data)
  );
  Spicetify.Player.addEventListener("onplaypause", () =>
    setIsPlaying(Spicetify.Player.isPlaying())
  );
  Spicetify.Player.addEventListener("onprogress", () =>
    setProgress(Spicetify.Player.getProgressPercent())
  );

  return (
    <div
      id="pipWindow"
      style={{
        "--accent":
          accent !== "err"
            ? `rgb(${accent[0]}, ${accent[1]}, ${accent[2]})`
            : "#000000",
      }}
    >
      <GrabBar />
      <Playback progress={progress} />
      <Viewer song={song} setAccent={setAccent} />
      <Controls isPlaying={isPlaying} />
    </div>
  );
}
