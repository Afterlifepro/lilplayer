import React from "react";

export default function Playback({progress}: {progress: number}) {
    return <div id="lilplayer-playback" >
        <div id="playback-progress-wrapper">
            <div id="playback-progress" style={{width: `${progress*100}%`}}></div>
        </div>
    </div>;
}