type UswdsModule = {
  on: (ele?: HTMLElement) => void;
  off: (ele: HTMLElement) => void;
};

declare module "@uswds/uswds/js/*" {
  const module: UswdsModule;

  export default module;
}

declare module "*.svg" {
  /**
   * Use `any` to avoid conflicts with
   * `@svgr/webpack` plugin or
   * `babel-plugin-inline-react-svg` plugin.
   */
  export const ReactComponent: React.SVGAttributes<{}>;

  const content: string;
  export default content;
}
