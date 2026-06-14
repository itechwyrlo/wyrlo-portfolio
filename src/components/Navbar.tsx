export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top site-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home">
          wyrlo<span className="brand-accent">.</span>dev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 text-center">
            <li className="nav-item">
              <a className="nav-link" href="#about">about</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
