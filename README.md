## Getting Started

Create .env file and update with your Apryse license key
`cp .env.example .env`

### Challenge 1: WebViewer Initialization + UI Customization

**Goal:** Personalize your WebViewer instance
**Tasks:**

- Initialize WebViewer using React
- Remove the print button
- Change the theme to dark
- Add a company logo to the header

**Helpful Docs Links**

- Initialize WebViewer [quick start](https://docs.apryse.com/web/guides/get-started/vite#4-initialize-webviewer)

- Remove print button [disable elements](https://sdk.apryse.com/api/web/UI.html#.disableElements)

- Change theme to dark [set theme](https://sdk.apryse.com/api/web/UI.html#.setTheme__anchor)

- Add company logo [docs example](https://docs.apryse.com/web/guides/customizing-header#appending-logo-and-shifting-existing-buttons-to-the-right)

### Challenge 2: Generate a Document Using Templating API

**Goal:** Turn JSON into a polished, filled PDF
**Tasks:**

- Use the Templating API to inject data into a template (e.g., invoice, certificate)
- Show the generated document in WebViewer
- Export the result as a flattened PDF

**Helpful Docs Links**

- Generate PDF from DOCX template [docs example](https://docs.apryse.com/web/guides/create/generate-docx-template)

### Challenge 3: Find and Redact PII

**Goal:** Detect and redact sensitive data like emails and phone numbers
**Tasks:**

- Load a document with fake PII.
- Use search + regex to find emails, SSNs, phone numbers, etc.
- Apply redactions to each match.

**Helpful Docs Links**

- Redact PII [docs example](https://docs.apryse.com/web/guides/search-and-redact)

### Challenge 4: Compare Original vs Redacted

**Goal:** Show before-and-after versions of the document
**Tasks:**

- Use a side-by-side WebViewer layout
- Load the original and redacted versions
- Visually confirm the redactions

### Challenge 5: Add a Signature and Export

**Goal:** Sign the redacted document and finalize it
**Tasks:**

- Add a signature widget programmatically or from the UI.
- Sign using type/draw.
- Flatten and download the final PDF.
