import WebViewer from "@pdftron/webviewer";
import { useEffect, useRef } from "react";

export default function Challenge2() {
  const viewerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    WebViewer(
      {
        path: "/lib",
        initialDoc: "./src/assets/sample_invoice.docx",
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

      // get sample_invoice.docx and populate it with json data
      const jsonData = {
        invoice_number: "101",
        invoice_date: "September 1",
        invoice_customer: "Bill I.",
        invoice_project: "Building You a PDF Viewer",
        invoice_cost: "9.99",
      };
    });
  }, []);

  return <div className="webviewer" ref={viewerRef} />;
}
