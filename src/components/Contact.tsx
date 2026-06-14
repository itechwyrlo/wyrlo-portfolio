export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <p className="section-label">04 / contact</p>
            <h2 className="section-title">Let's work together</h2>
            <p className="text-muted mb-4" style={{ maxWidth: '38rem' }}>
              I'm currently looking for a mid level developer role where I can keep working with
              C#, ASP.NET Core, and SQL Server, while continuing to grow as a full stack
              developer. If that sounds like a fit, feel free to reach out.
            </p>
            <div className="d-flex flex-column gap-2 mono">
              <a href="mailto:Wyrlo.adeva.lerios@gmail.com">Wyrlo.adeva.lerios@gmail.com</a>
              <a href="tel:+639053080511">+63 905 308 0511</a>
            </div>
            <div className="mt-4">
              <a href="/resume-wyrlo.lerios.pdf" download className="btn btn-accent px-4 py-2">
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
