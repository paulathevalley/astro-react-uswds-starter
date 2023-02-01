declare module "@uswds/uswds/js/*" {
  const module: {
    on: (ele?: HTMLElement) => void;
    off: (ele: HTMLElement) => void;
  };

  export default module;
}

declare module "*.svg" {
  // Add support for svgr plugin
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
