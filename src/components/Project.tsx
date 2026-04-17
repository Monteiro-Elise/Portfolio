import { FaPlay } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import { useLanguage } from '../hooks/useLanguage';

interface Props {
  bool: boolean;
  id: string;
  isVideo: boolean;
  media: string;
  mediaDescription: string;
  title: string;
  description: string;
  features: string[];
  skills: string[];
  githubLink: string;
  demoLink: string;
}

function Project({
  bool,
  id,
  isVideo,
  media,
  mediaDescription,
  title,
  description,
  skills,
  features,
  githubLink,
  demoLink,
}: Props) {
  const contentPosition = bool ? 'right' : 'left';
  const { t } = useLanguage();

  return (
    <article className="mx-auto max-w-5xl px-4 gap-12 py-12">
      <div className={`project-container ${contentPosition}`}>
        <figure className="project-media">
          {isVideo ? (
            <>
              <p id={`project-${id}-video-desc`} className="sr-only">
                {mediaDescription}
              </p>
              <video
                autoPlay
                loop
                muted
                className="w-full h-auto"
                aria-describedby={`project-${id}-video-desc`}
              >
                <source src={media} type="video/mp4" />
                {t('videoNotSupported')}
              </video>
            </>
          ) : (
            <img
              src={media}
              alt={mediaDescription}
              className="w-full h-auto rounded-lg"
            />
          )}
          <figcaption className="sr-only">{mediaDescription}</figcaption>
        </figure>
        <div className={`project-content ${contentPosition}`}>
          <h3 className="py-4">{title}</h3>
          <p className="text-center">
            <b>{description}</b>
          </p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>
                <p>• {feature}</p>
              </li>
            ))}
          </ul>
          <div className="project-bottom py-4">
            <ul className="flex flex-wrap items-center gap-2">
              {skills.map((skill, index) => (
                <li key={index}>
                  <b>{skill}</b>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={t('aria-label.githubRepo', { project: title })}
                >
                  <SiGithub className="icon-action" aria-hidden="true" />
                </a>
              )}

              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                  aria-label={t('aria-label.liveDemo', { project: title })}
                >
                  <FaPlay className="icon-action" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Project;
