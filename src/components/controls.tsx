import React from "react";
import { Icon } from "../utils/icon";

export default function Controls({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div id="lilplayer-controls">
      {/* <Icon icon="shuffle" click={Spicetify.Player.toggleShuffle} /> */}
      <Icon icon="skip-back" click={Spicetify.Player.back} />
      {isPlaying ? <Icon icon="pause" circle click={Spicetify.Player.pause} /> : <Icon icon="play" circle click={Spicetify.Player.play} />}
      <Icon icon="skip-forward" click={Spicetify.Player.next}/>
      {/* <Icon icon="repeat" click={Spicetify.Player.toggleRepeat}/> */}
    </div>
  );
}
