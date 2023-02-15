import { useEffect, useState } from "react";

export function PageMakerBlank({
  valueSource,
  boardData,
  listenOnRender = false,
  onRenderFinish = () => {},
}) {
  useEffect(() => {
    listenOnRender && onRenderFinish();
  });

  return <div></div>;
}
