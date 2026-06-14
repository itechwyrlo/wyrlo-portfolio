import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <p className="section-label">03 / projects</p>
            <h2 className="section-title">Things I've built end to end</h2>
            <p className="text-muted" style={{ maxWidth: '40rem' }}>
              Each of these is a personal project I designed, built, and deployed on my own,
              from the database up to the live URL.
            </p>
          </div>
        </div>
        <div className="row gy-4">
          {projects.map((project) => (
            <div className="col-12 col-lg-6" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
