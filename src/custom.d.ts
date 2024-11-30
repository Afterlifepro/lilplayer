import "react";

declare module "react" {
  interface CSSProperties {
    "-webkit-app-region"?:
      | "drag"
      | "no-drag"
      | "none"
      | "inherit"
      | "initial"
      | "revert"
      | "revert-layer"
      | "unset";
    "--accent"?: any;
  }
}
