import WebViewer from "@pdftron/webviewer";
import { useEffect, useRef } from "react";

export default function Challenge5() {
  const viewerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    WebViewer(
      {
        path: "/lib",
        licenseKey: import.meta.env.VITE_APRYSE_LICENSE_KEY,
      },
      viewerRef.current
    ).then((instance) => {
      instance.UI.setTheme(instance.UI.Theme.DARK);
      instance.UI.disableElements(["printButton"]);
      const logo = new instance.UI.Components.CustomElement({
        dataElement: "companyLogo",
        render: () => {
          const img = document.createElement("img");
          img.src = "logo.png";
          img.alt = "Apryse logo";
          img.style.height = "32px";
          return img;
        },
      });
      const topHeader = instance.UI.getModularHeader("default-top-header");
      topHeader.setItems([logo, ...topHeader.getItems()]);
    });
  }, []);

  return <div className="webviewer" ref={viewerRef} />;
}
