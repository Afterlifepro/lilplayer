import React from "react";
import { get_average_rgb } from "../utils/getAverageRBG";
import { getUrl } from "../utils/getUrl";

export default function Viewer({
  song,
  setAccent,
}: {
  song: Spicetify.PlayerState;
  setAccent: (accent: Uint8ClampedArray|"err") => void;
}) {
  // quit if no song or cover art or artists?
  if (!song || !song.item.album.images || !song.item.artists) return <>404</>;

  // @ts-expect-error some undefined bs itll be fine
  setAccent(get_average_rgb(getUrl(song.item.album.images.at(-1).url)));

  return (
    <div id="viewer">
      <img src={getUrl(song.item.album.images[0].url)} alt="" />
      {/* <div id="song">{song.item.name}</div>
      <div id="artist">{song.item.artists[0].name}</div> */}
    </div>
  );
}
