import { useRef } from 'react';
import { FaPlay } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

import Reveal from '../../components/Reveal';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useLanguage } from '../../hooks/useLanguage';
import { useVisibility } from '../../hooks/useVisibility';
import type { Project } from './projects.type';

export default function ProjectItem({
  bool,
  project,
}: {
  bool: boolean;
  project: Project;
}) {
  const contentPosition = bool ? 'right' : 'left';
  const { t } = useLanguage();
  const refVideo = useRef<HTMLVideoElement>(null);
  const isVisible = useVisibility(refVideo, { rootMargin: '200px' });
  const isMobile = useIsMobile();

  return (
    <article className="mx-auto max-w-5xl px-4 gap-12 py-12">
      <div className={`project-container ${contentPosition}`}>
        <figure className="project-media">
          <Reveal delay={isMobile ? 200 : 400}>
            {project.isVideo ? (
              <>
                <p id={`project-${project.id}-video-desc`} className="sr-only">
                  {project.mediaDescription}
                </p>
                <video
                  ref={refVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster={`/project/preview_${project.id}.webp`}
                  controls={false}
                  className="w-full h-auto"
                  aria-describedby={`project-${project.id}-video-desc`}
                >
                  {isVisible && <source src={project.media} type="video/mp4" />}
                  {t('videoNotSupported')}
                </video>
              </>
            ) : (
              <img
                src={project.media}
                alt={project.mediaDescription}
                loading="lazy"
                className="w-full h-auto rounded-lg"
              />
            )}
          </Reveal>
        </figure>
        <div className={`project-content ${contentPosition}`}>
          <Reveal delay={100}>
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
          </Reveal>
        </div>
      </div>
    </article>
  );
}
