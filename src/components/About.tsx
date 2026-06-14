export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-lg-4">
            <p className="section-label">01 / about</p>
            <h2 className="section-title">A developer who reads the existing code first.</h2>
          </div>
          <div className="col-12 col-lg-8">
            <p className="mb-3" style={{ fontSize: '1.05rem' }}>
              I'm an application developer with three years of experience building and
              maintaining backend modules for an enterprise ERP system. My day to day work is in
              C#, ASP.NET Core Web API, and SQL Server, where I build features, fix bugs, and
              keep an existing codebase healthy without breaking what already works.
            </p>
            <p className="mb-3 text-muted">
              Before moving into application development, I spent a year as a malware analysis
              trainee, reverse engineering Windows binaries with IDA Pro and OllyDbg. That work
              trained me to read unfamiliar code carefully, form a hypothesis, and test it before
              making changes, a habit that carries directly into how I approach backend
              development today.
            </p>
            <p className="mb-4 text-muted">
              Outside of work, I build full stack projects from scratch to learn React and
              TypeScript, and to practice the parts of the development cycle I don't get to touch
              in my day job: setting up CI/CD pipelines with GitHub Actions and deploying to cloud
              hosting and Vercel.
            </p>

            <div className="d-flex flex-wrap gap-3 mono small">
              <div className="tag">3 years experience</div>
              <div className="tag">Quezon City University, BS Information Technology</div>
              <div className="tag">Based in the Philippines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
