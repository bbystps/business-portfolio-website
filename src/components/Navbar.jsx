import lumaLogo from "../assets/luma-logo.png";

function Navbar() {
  return (
    <header className="split-nav">
      <div className="split-nav-inner">
        <a href="#home" className="split-brand">
          <span className="brand-logo">
            <img src={lumaLogo} alt="Luma Interior Studio logo" />
          </span>

          <span className="brand-text">
            Luma
            <small>Interior Studio</small>
          </span>
        </a>

        <nav className="split-menu">
          <a href="#about">Studio</a>
          <a href="#services">Services</a>
          <a href="#projects">Spaces</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <a href="#contact" className="split-nav-cta">
        Start a Project
      </a>
    </header>
  );
}

export default Navbar;