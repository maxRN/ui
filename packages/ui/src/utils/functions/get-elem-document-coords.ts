export function getElemDocumentCoords(elem: Element | undefined) {
  if (!elem) {
    return null;
  }
  const box = elem.getBoundingClientRect();

  const { body } = document;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = box.top + scrollTop - clientTop;
  const left = box.left + scrollLeft - clientLeft;

  return {
    top: Math.round(top),
    left: Math.round(left),
    width: box.width,
    height: box.height,
  };
}
