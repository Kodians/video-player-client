import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StoreProvider } from "./store";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  return render(ui, { wrapper: StoreProvider, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
