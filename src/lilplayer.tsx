import React from "react";
import GrabBar from "./components/grabBar";
import Viewer from "./components/viewer";
import Playback from "./components/playback";
import Controls from "./components/controls";
import "./styles.css";

export default function LilPlayer() {
  const [song, setSong] = React.useState(
    Spicetify.Player.data
  );
  const [isPlaying, setIsPlaying] = React.useState(
    Spicetify.Player.isPlaying()
  );
  const [progress, setProgress] = React.useState(
    Spicetify.Player.getProgressPercent()
  );

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
    <div id="pipWindow">
      <GrabBar />
      <Viewer song={song} />
      <Playback progress={progress} />
      <Controls isPlaying={isPlaying} />
    </div>
  );
}
