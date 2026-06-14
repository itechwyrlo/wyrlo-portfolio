export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 text-center text-md-start">
        <span>&copy; {year} Wyrlo Lerios. Built with React, TypeScript, and Bootstrap 5.</span>
        <a href="#home">Back to top &uarr;</a>
      </div>
    </footer>
  )
}
