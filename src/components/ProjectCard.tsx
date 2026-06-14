import type { Project } from '../data/projects'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <div className="file-tab">
        <span className="dot">●</span> {project.fileName}
      </div>
      <div className="card-body p-4">
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
        <p>{project.description}</p>

        <ul className="ps-3" style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>
          {project.highlights.map((point) => (
            <li className="mb-1" key={point}>
              {point}
            </li>
          ))}
        </ul>

        <div className="d-flex flex-wrap gap-2 mt-3">
          {project.stack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
