declare module '*.JPG' {
  const content: import('next/image').StaticImageData;
  export default content;
}

declare module '*.MOV' {
  const content: string | { src: string };
  export default content;
}

declare module '*.mov' {
  const content: string | { src: string };
  export default content;
}

