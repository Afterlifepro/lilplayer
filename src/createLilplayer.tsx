import React from "react";
import { type Root } from "react-dom/client";
import LilPlayer from "./lilplayer";

declare global {
  interface Window {
    documentPictureInPicture: {
      requestWindow(config?: Record<string, any>): Promise<Window>;
      window: Window;
    };
  }
}

function copyStyles(from: Window, to: Window) {
  [...from.document.styleSheets].forEach((styleSheet) => {
    try {
      const cssRules = [...styleSheet.cssRules]
        .map((rule) => rule.cssText)
        .join("");
      const style = document.createElement("style");

      style.textContent = cssRules;
      to.document.head.appendChild(style);
    } catch (e) {
      const link = document.createElement("link");

      link.rel = "stylesheet";
      link.type = styleSheet.type;
      // as unknown as string so ts doesnt go "these r not close enough :(" and is quiet
      link.media = styleSheet.media as unknown as string;
      link.href = styleSheet.href as string;
      to.document.head.appendChild(link);
    }
  });
}

export function createLilInstance(config: Record<string, any> = {}) {
  let isOpen: boolean = false;
  let pipWindow: Window | null = null;
  let root: Root | null = null;

  const open = async () => {
    if (!isOpen) {
      // prevent opening another window
      isOpen = true;
      // open the window
      pipWindow = await window.documentPictureInPicture.requestWindow(config);
      // copy over styles so it can be restyled by themes
      copyStyles(window, pipWindow);
      // remove min width/height to hide scrollbars
      pipWindow.document.body.style.minWidth = "0";
      pipWindow.document.body.style.minHeight = "0";

      // add miniplayer
      root = Spicetify.ReactDOM.createRoot(pipWindow.document.body);
      root?.render(<LilPlayer />);
    } else {
      root?.unmount();
      pipWindow?.close();
      isOpen = false;
    }
  };

  return {
    open,
  };
}
