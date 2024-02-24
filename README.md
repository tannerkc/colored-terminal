# Colored Terminal

Color Terminal is a Node.js module that allows you to easily add color and style to your terminal output messages. With 
this module, you can make your log messages stand out by applying various text styles and colors.

## Features

- Apply different text styles such as bold, italic, underline, and strikethrough.
- Choose from a variety of predefined colors or specify custom HEX or RGB colors.
- Use prefixes for error, warning, info, and success messages.
- No dependencies. Very lightweight, just one file.

## Installation

```bash
npm install colored-terminal
```
```bash
yarn add colored-terminal
```

## Usage

```javascript
const log = require('colored-terminal');

log.red('Error: Something went wrong!')
log.green('Success: Operation completed successfully.')

log.info('This is an informational message.')
log.warn('Proceed with caution.')
log.error('System malfunction.')
log.success('Task completed successfully.')
```

## Styles and Colors

### Text Styles

- `bold`
- `italic`
- `underline`
- `strikethrough`

### Predefined Colors

- `black`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`

### Custom Colors

You can specify custom colors using HEX or RGB values:

```javascript
log.hex('#FF5733', 'Custom HEX color');
log.rgb({ r: 255, g: 87, b: 51 }, 'Custom RGB color');
```

### Message Styles

- `error`: Red color with "[ERROR]" prefix.
- `warn`: Yellow color with "[WARN]" prefix.
- `info`: Cyan color with "[INFO]" prefix.
- `success`: Green color with "[SUCCESS]" prefix.
