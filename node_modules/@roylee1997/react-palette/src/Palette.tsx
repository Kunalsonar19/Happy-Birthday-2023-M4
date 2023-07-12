import React, { cloneElement, ReactNode } from "react";
import { PaletteState, usePalette } from "./usePalette";

export type PaletteProps = {
  src: string;
  children: JSX.Element;
};

export const Palette: React.FC<PaletteProps> = ({
  src,
  children
}: PaletteProps) => {
  const palette = usePalette(src);

  return cloneElement(children, {
    palette
  })
};
