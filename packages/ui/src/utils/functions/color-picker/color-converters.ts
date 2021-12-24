export const rgbStringToArray = (rgbColorString: string) =>
  rgbColorString
    .replaceAll(/[^\d,]/gi, '')
    .split(',')
    .map((n) => +n);

export const hexToRgb = (hexColor: string) => {
  // if (!hexColor) return { r: 0, g: 0, b: 0 };
  if (!hexColor) return [0, 0, 0];
  return [
    Number.parseInt(hexColor.slice(1, 3), 16),
    Number.parseInt(hexColor.slice(3, 5), 16),
    Number.parseInt(hexColor.slice(5, 7), 16),
  ];
};

const rgbChannelToHex = (channel: any) => channel.toString(16).padStart(2, '0');

export const rgbToHex = (...rgbColor: any) => `#${rgbColor.map(rgbChannelToHex).join('')}`;

export const hslToHex = (h: number, s: number, l: number) => {
  const dividedL = l / 100;
  const a = (s * Math.min(dividedL, 1 - dividedL)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = dividedL - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return rgbChannelToHex(Math.round(255 * color));
  };

  return `#${f(0)}${f(8)}${f(4)}`;
};

export const rgbToHsl = (...rgbColor: any) => {
  let [r, g, b] = rgbColor;
  r /= 255;
  g /= 255;
  b /= 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;

  if (max === min) {
    h = 0;
    s = 0;
  } else {
    const diff = max - min;
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
    switch (max) {
      case r:
        h = (g - b) / diff + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / diff + 2;
        break;
      case b:
        h = (r - g) / diff + 4;
        break;
      default:
    }
    if (h) {
      h /= 6;
    }
  }

  // * 360 for having the hue in degrees
  if (h) {
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }
  return [0, 0, 0];
};

export const colorToHsl = (color: string) => {
  if (color.startsWith('#')) {
    let hex = color;
    if (color.length === 4) {
      hex = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
    }
    return rgbToHsl(...hexToRgb(hex));
  }

  if (color.startsWith('rgb')) {
    const colorInRgb = rgbStringToArray(color);
    return rgbToHsl(...colorInRgb);
  }

  // if the color is in text and no one from previous then return the default color which is black
  if (typeof color === 'string') {
    return [0, 0, 0];
  }

  return color;
};

export const colorToRgb = (color: string) => {
  // we are not handling (hsl/color name) here cause we are accepting only HEX and RGB colors as default colors from user.
  if (color.startsWith('#')) {
    return hexToRgb(color);
  }

  if (color.startsWith('rgb')) {
    return rgbStringToArray(color);
  }

  if (typeof color === 'string') {
    return [0, 0, 0];
  }

  return color;
};

export const colorToHex = (color: string) => {
  if (color.startsWith('#')) {
    if (color.length === 7) {
      return color;
    }

    return `#${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}`;
  }

  if (color.startsWith('rgb')) {
    return rgbToHex(...rgbStringToArray(color));
  }

  if (typeof color === 'string') {
    return '#000000';
  }

  return color;
};

const checkIsBlack = (s: number, l: number) => l === 0 && (s === 0 || s === 1);
const checkIsWhite = (s: number, l: number) => s === 0 && l === 1;

// both hsv and hsl values are in [0, 1] except h is in [0, 360]
export const hsvToHsl = (h: number, s: number, v: number) => {
  let newS = s;
  const l = ((2 - s) * v) / 2;

  if (l !== 0) {
    if (l === 1) {
      newS = 0;
    } else if (l < 0.5) {
      newS = (newS * v) / (l * 2);
    } else {
      newS = (newS * v) / (2 - l * 2);
    }
  }

  const isBlack = checkIsBlack(newS, l);
  return [isBlack || checkIsWhite(newS, l) ? 0 : h, isBlack ? 0 : Math.round(newS * 100), Math.round(l * 100)];
};

// both hsv and hsl values are in [0, 1] except h is in [0, 360]
export const hslToHsv = (h: number, s: number, l: number) => {
  let newS = s;

  const newL = l * 2;
  newS *= newL <= 1 ? newL : 2 - newL;
  const v = (newL + newS) / 2;
  newS = (2 * newS) / (newL + newS);

  // return [h, newS, v];
  const isBlack = checkIsBlack(newS, l);
  return [isBlack || checkIsWhite(newS, l) ? 0 : h, isBlack ? 0 : Math.round(newS * 100), Math.round(v * 100)];
};
