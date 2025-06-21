/// <reference types="vite/client" />

// Para SVGs normais (como imagem)
declare module "*.svg" {
  const src: string;
  export default src;
}

// Para SVGs como componentes React (com ?react)
declare module "*.svg?react" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
