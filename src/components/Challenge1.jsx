import { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

export default function Challenge1() {
  const viewerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // initialize WebViewer

    WebViewer();

    // remove print button
    // change theme to dark
    // add company logo (public/logo.png)
  }, []);

  return <div className="webviewer" ref={viewerRef} />;
}
