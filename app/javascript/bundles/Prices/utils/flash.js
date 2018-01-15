function flash(element, cssClass) {
  element.classList.add(cssClass);
  setTimeout(() => element.classList.remove(cssClass), 1000);
}

export function triggerGreenFlash(exchanges) {
  exchanges.forEach((_, exchange) => flash(document.getElementById(`${exchange}-box`), 'flash-green'));
}

export function triggerRedFlash(exchanges) {
  exchanges.forEach((_, exchange) => flash(document.getElementById(`${exchange}-box`), 'flash-red'));
}
