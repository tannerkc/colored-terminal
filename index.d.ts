declare module 'colored-terminal' {
  type LogFunction = (text: any) => void;

  interface ColorMap {
    reset: string;
    bold: string;
    dim: string;
    italic: string;
    underscore: string;
    blink: string;
    reverse: string;
    hidden: string;
    black: string;
    red: string;
    green: string;
    yellow: string;
    blue: string;
    magenta: string;
    cyan: string;
    white: string;
    bgBlack: string;
    bgRed: string;
    bgGreen: string;
    bgYellow: string;
    bgBlue: string;
    bgMagenta: string;
    bgCyan: string;
    bgWhite: string;
    success: string;
    error: string;
    warn: string;
    info: string;
  }

  export const colorMap: Readonly<ColorMap>;

  export function hexToAnsi(hexColor: string): string;
  export function rgbToAnsi(r: number, g: number, b: number): string;
  export function applyColor(color: string, text: any): string;

  interface RGBColor {
    r: number;
    g: number;
    b: number;
  }

  type ColorKeys = keyof ColorMap;

  interface Log extends Record<ColorKeys, LogFunction> {
    hex: (hexColor: string, text: any) => void;
    rgb: (color: RGBColor, text: any) => void;
    default: LogFunction;
  }

  const log: Log;

  export default log;
}