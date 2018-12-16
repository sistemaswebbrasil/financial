export function selectSkin(selected) {
  return {
    type: "SKIN_CHANGED",
    payload: selected
  };
}
