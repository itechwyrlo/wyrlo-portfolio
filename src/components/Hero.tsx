export default function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-lg-6">
            <p className="eyebrow mb-3">whoami</p>
            <h1 className="hero-title mb-3">
              Hi, I'm Wyrlo Lerios.
              <br />
              Software developer.
            </h1>
            <p className="hero-lead mb-4">
              I build and maintain backend systems with C#, ASP.NET Core, and SQL Server, and I'm
              growing into full stack work with React and TypeScript through projects I design,
              build, and deploy on my own.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-accent px-4 py-2">
                View projects
              </a>
              <a href="/resume-wyrlo.lerios.pdf" download className="btn btn-outline-light-mono px-4 py-2">
                Download resume
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">wyrlo@portfolio: ~</span>
              </div>
              <div className="terminal-body">
                <div><span className="prompt">$</span> cat profile.json</div>
                <div className="mt-2">{'{'}</div>
                <div className="ps-3">
                  <span className="key">"role"</span>: "Application Developer",
                </div>
                <div className="ps-3">
                  <span className="key">"experience"</span>: "3 years",
                </div>
                <div className="ps-3">
                  <span className="key">"core_stack"</span>: ["C#", "ASP.NET Core", "SQL Server"],
                </div>
                <div className="ps-3">
                  <span className="key">"currently_learning"</span>: ["React", "TypeScript"],
                </div>
                <div className="ps-3">
                  <span className="key">"deploys_to"</span>: ["MonsterASP.NET", "Vercel"],
                </div>
                <div className="ps-3">
                  <span className="key">"ci_cd"</span>: "GitHub Actions"
                </div>
                <div>{'}'}</div>
                <div className="mt-3 comment"># scroll down to see what I've built</div>
                <div className="mt-1">
                  <span className="prompt">$</span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
