import React from "react";
import { get_average_rgb } from "../utils/getAverageRBG";
import { getUrl } from "../utils/getUrl";

export default function Viewer({ song }: { song: Spicetify.PlayerState }) {
  // quit if no song or cover art
  if (!song || !song.item.album.images) return <>404</>;
  
  // @ts-expect-error some undefined bs itll be fine
  const accent = get_average_rgb(getUrl(song.item.album.images.at(-1).url))
  console.log(accent)

  if (accent == "err") return <>404</>;

  return <div id="viewer" style={{"--accent": `rgb(${accent[0]}, ${accent[1]}, ${accent[2]})`}}>
    <img src={getUrl(song.item.album.images[0].url)} alt="" />
  </div>;
}
