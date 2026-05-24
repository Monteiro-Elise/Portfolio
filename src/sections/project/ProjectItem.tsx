import { FaPlay } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

import InViewReveal from '../../components/InViewReveal';
import { useLanguage } from '../../hooks/useLanguage';
import type { Project } from './projects.types';
import ProjectVideo from './ProjectVideo';

export default function ProjectItem({
  isTextRight,
  project,
}: {
  isTextRight: boolean;
  project: Project;
}) {
  const contentPosition = isTextRight ? 'right' : 'left';
  const { t } = useLanguage();

  return (
    <article className="mx-auto max-w-5xl px-4 gap-12 py-12">
      <div className={`project-container ${contentPosition}`}>
        <figure className="project-media">
          <InViewReveal delay={300}>
            {project.isVideo ? (
              <ProjectVideo project={project} />
            ) : (
              <img
                src={project.media}
                alt={project.mediaDescription}
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
            )}
          </InViewReveal>
        </figure>
        <div className={`project-content ${contentPosition}`}>
          <InViewReveal delay={100}>
            <h3 className="py-4">{project.title}</h3>
            <p className="text-center">
              <b>{project.description}</b>
            </p>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>
                  <p>• {feature}</p>
                </li>
              ))}
            </ul>
            <div className="project-bottom py-4">
              <ul className="flex flex-wrap items-center gap-2">
                {project.skills.map((skill, index) => (
                  <li key={index}>
                    <b>{skill}</b>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={t('aria-label.githubRepo', {
                      project: project.title,
                    })}
                  >
                    <SiGithub className="icon-action" aria-hidden="true" />
                  </a>
                )}

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={t('aria-label.liveDemo', {
                      project: project.title,
                    })}
                  >
                    <FaPlay className="icon-action" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </InViewReveal>
        </div>
      </div>
    </article>
  );
}
