import { defaultTheme } from '.';
import { Breakpoints } from '../roots/breakpoints/entity';
import { Breakpoint } from '../roots/breakpoints/entity/breakpoints-map';

const createBreakpoints = (breakpoints: Partial<Breakpoints>): Breakpoints => {
  const { values = defaultTheme.breakpoints.values, classes = defaultTheme.breakpoints.classes } = breakpoints;
  const unit = 'px';

  const keys = Object.keys(values) as Breakpoint[];

  const up = (key: Breakpoint): string => {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  };

  const down = (key: Breakpoint): string => {
    const value = values[key];
    return `@media (max-width:${value}${unit})`;
  };

  const between = (start: Breakpoint, end: Breakpoint): string => {
    const endIndex = keys.indexOf(end);

    return `@media (min-width:${values[start]}${unit}) and (max-width:${values[keys[endIndex]]}${unit})`;
  };

  const only = (key: Breakpoint): string => {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  };

  const getBreakpointClass = (width: number): string => {
    if (width >= values.xs && width <= values.sm) {
      return classes.xs;
    }
    if (width >= values.sm && width < values.md) {
      return classes.sm;
    }
    if (width >= values.md && width < values.lg) {
      return classes.md;
    }
    if (width >= values.lg && width < values.xl) {
      return classes.lg;
    }
    if (width >= values.xl) {
      return classes.xl;
    }
    return classes.md;
  };

  return {
    keys,
    values,
    classes,
    getBreakpointClass,
    up,
    down,
    between,
    only,
  };
};

export default createBreakpoints;
