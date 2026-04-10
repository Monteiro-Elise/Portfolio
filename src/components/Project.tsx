import { FaPlay } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';
import { useLanguage } from '../hooks/useLanguage';

interface Props {
  bool: boolean;
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
    <div className="mx-auto max-w-5xl px-4 gap-12 py-12">
      <div className={`project-container ${contentPosition}`}>
        <div className="project-media">
          {isVideo ? (
            <>
              <p id={`video-desc-${title}`} className="sr-only">
                {mediaDescription}
              </p>
              <video
                autoPlay
                loop
                muted
                className="w-full h-auto"
                aria-describedby={`video-desc-${title}`}
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
        </div>
        <div className={`project-content ${contentPosition}`}>
          <h3>{title}</h3>
          <p className="text-center">
            <b>{description}</b>
          </p>
          <div>
            {features.map((feature, index) => (
              <p key={index}>
                • {feature}
                <br />
              </p>
            ))}
          </div>
          <div className="project-bottom py-4">
            <div className="flex flex-wrap items-center gap-2">
              {skills.map((skill, index) => (
                <b key={index}>{skill}</b>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                >
                  <SiGithub className="icon-action" />
                </a>
              )}

              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn"
                >
                  <FaPlay className="icon-action" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
