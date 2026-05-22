import { useRef } from 'react';

import { useFirstInView } from '../../hooks/useFirstInView';
import { useLanguage } from '../../hooks/useLanguage';
import type { Project } from './projects.types';

export default function ProjectVideo({ project }: { project: Project }) {
  const { t } = useLanguage();
  const refVideo = useRef<HTMLVideoElement>(null);
  const isVisible = useFirstInView(refVideo, { rootMargin: '200px' });

  return (
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
        poster={`/project/${project.id}-preview.webp`}
        controls={false}
        className="w-full h-auto"
        aria-describedby={`project-${project.id}-video-desc`}
      >
        {isVisible && <source src={project.media} type="video/mp4" />}
        {t('videoNotSupported')}
      </video>
    </>
  );
}
