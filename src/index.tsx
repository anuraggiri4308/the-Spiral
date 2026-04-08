import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Frame } from "./screens/TheSpiral/Frame";
import { BrowserRouter } from "react-router-dom";
import ComingSoon from "./screens/TheSpiral/Pages/comingSoon/comingSoon";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ComingSoon />
      {/* <Frame /> */}
    </BrowserRouter>
  </StrictMode>
);
