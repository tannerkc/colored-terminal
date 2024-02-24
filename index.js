// Hello world!
// Written by Tanner Cottle on a random Saturday morning.
// 02.24.2024

const colorMap = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    italic: "\x1b[3m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    bgBlack: "\x1b[40m",
    bgRed: "\x1b[41m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgBlue: "\x1b[44m",
    bgMagenta: "\x1b[45m",
    bgCyan: "\x1b[46m",
    bgWhite: "\x1b[47m",
    success: "\x1b[32m✔ [SUCCESS] \x1b[0m",
    error: "\x1b[31m✖ [ERROR] \x1b[0m",
    warn: "\x1b[33m⚠ [WARN] \x1b[0m",
    info: "\x1b[36mℹ [INFO] \x1b[0m",
};


function hexToAnsi(hexColor) {
    const r = parseInt(hexColor.substring(1, 3), 16);
    const g = parseInt(hexColor.substring(3, 5), 16);
    const b = parseInt(hexColor.substring(5, 7), 16);

    const ansiColor = 16 + (36 * r + 6 * g + b) / 255;

    return `\x1b[38;2;${r};${g};${b}m`
}

function rgbToAnsi(r, g, b) {
    if (r === g && g === b) {
        if (r < 8) {
            return 16;
        }

        if (r > 248) {
            return 231;
        }

        return Math.round(((r - 8) / 247) * 24) + 232;
    }

    let ansi = 16
        + (36 * Math.round(r / 255 * 5))
        + (6 * Math.round(g / 255 * 5))
        + Math.round(b / 255 * 5);

    return `\x1b[38;5;${Math.round(ansi)}m`
}

function applyColor(color, text) {
    return `${color}${text}${colorMap.reset}`;
}

const mappedLog = {
    ...Object.keys(colorMap).reduce((acc, color) => {
        if (color !== 'reset') {
            acc[color] = text => console.log(applyColor(colorMap[color], text));
        }
        return acc;
    }, {}),
    hex: (hexColor, text) => console.log(applyColor(hexToAnsi(hexColor), text)),
    rgb: ({r, g, b}, text) => console.log(applyColor(rgbToAnsi(r, g, b), text)),
    default: console.log
};

const log = {
    ...mappedLog,
};

module.exports = log;
