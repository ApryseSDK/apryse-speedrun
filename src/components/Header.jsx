export default function Header({ activeIndex, onNavClick }) {
  const navItems = [
    "Personalize WebViewer",
    "Generate Document",
    "Find & Redact PII",
    "Compare Documents",
    "Add Signature",
  ];

  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Apryse Logo" className="logo-img" />
      </div>{" "}
      <nav className="nav">
        {navItems.map((item, index) => (
          <button
            key={item}
            onClick={() => onNavClick(index)}
            className={`nav-link ${activeIndex === index ? "active" : ""}`}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
