declare module "@uswds/uswds/js/*" {
  const module: {
    on: (ele?: HTMLElement) => void;
    off: (ele: HTMLElement) => void;
  };

  export default module;
}

declare module "*.svg?react" {
  // Add support for svgr plugin
  import React = require("react");
  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;
  export const ReactComponent;
}
