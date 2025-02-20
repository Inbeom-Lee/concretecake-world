export const handleFocus_Layer = (idTarget) => {
  const elements = document.querySelectorAll(".layerBase");
  const filterLayer = Array.from(elements).filter(
    (divElement) =>
      divElement.childNodes.length > 0 && divElement.id !== idTarget
  );
  const lastElement = filterLayer.at(-1);
  lastElement && lastElement.focus();
};
