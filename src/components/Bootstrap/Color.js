/*
 * @flow
 */

export type Color =
  | 'default'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'link';

export type Prefixes = 'btn';

export function colorToClass(
  prefix: Prefixes,
  color: ?Color,
  fallback: Color = 'default',
) {
  return `${prefix}-${color || fallback}`;
}
