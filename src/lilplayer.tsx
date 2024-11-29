import React from "react";
import GrabBar from "./components/grabBar";
import Viewer from "./components/viewer";
import Playback from "./components/playback";
import Controls from "./components/controls";
import "./styles.css"

export default function LilPlayer() {
    return (
        <div id="pipWindow">
            <GrabBar />
            <Viewer />
            <Playback />
            <Controls />
        </div>
    );
}