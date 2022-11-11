export function fileBfunA() {
  console.log("[debug][SIDE EFFECT] this has with tree shaking");
}

export function fileBfunB() {
  console.log(
    "[debug][Tree Shaked but in the source map] this has with tree shaking"
  );
}

export const sideEffects = fileBfunA();
