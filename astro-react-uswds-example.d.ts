type UswdsModule = {
  on: (ele?: HTMLElement) => void
  off: (ele: HTMLElement) => void
}

declare module '@uswds/uswds/js/*' {
  const module: UswdsModule

  export default module
}