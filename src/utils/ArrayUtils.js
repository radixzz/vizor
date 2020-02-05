export function arraysEqual(a, b) {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function copyArray(from, to) {
  for(let i = 0; i < to.length; i++) {
    to[i] = from[i];
  }
}