import React from "react";

export default function GrabBar() {
  return (
    <div id="grabBar">
      <div></div>
      <div>•••</div>
      <button onClick={() => {window.documentPictureInPicture.window.close()}} style={{"-webkit-app-region": "no-drag"}}>✕</button>
    </div>
  );
}
