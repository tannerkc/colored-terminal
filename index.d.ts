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

    export const colorMap: ColorMap;

    export function hexToAnsi(hexColor: string): string;

    export function rgbToAnsi(r: number, g: number, b: number): string;

    export function applyColor(color: string, text: any): string;

    export interface MappedLog {
        reset: LogFunction;
        bold: LogFunction;
        dim: LogFunction;
        italic: LogFunction;
        underscore: LogFunction;
        blink: LogFunction;
        reverse: LogFunction;
        hidden: LogFunction;
        black: LogFunction;
        red: LogFunction;
        green: LogFunction;
        yellow: LogFunction;
        blue: LogFunction;
        magenta: LogFunction;
        cyan: LogFunction;
        white: LogFunction;
        bgBlack: LogFunction;
        bgRed: LogFunction;
        bgGreen: LogFunction;
        bgYellow: LogFunction;
        bgBlue: LogFunction;
        bgMagenta: LogFunction;
        bgCyan: LogFunction;
        bgWhite: LogFunction;
        success: LogFunction;
        error: LogFunction;
        warn: LogFunction;
        info: LogFunction;
        hex: (hexColor: string, text: any) => void;
        rgb: (color: { r: number; g: number; b: number }, text: any) => void;
        default: LogFunction;
    }

    const log: MappedLog;
    export default log;
}
