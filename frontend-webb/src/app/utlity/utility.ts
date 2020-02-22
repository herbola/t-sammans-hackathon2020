export function deepCopyClone(aObject: any) {
  if (!aObject) {
    return aObject;
  }
  let v;
  const bObject = Array.isArray(aObject) ? [] : {};
  for (const k in aObject) {
    if (true) {
      v = aObject[k];
      bObject[k] = typeof v === "object" ? deepCopyClone(v) : v;
    }
  }
  return bObject;
}
