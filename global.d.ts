declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
