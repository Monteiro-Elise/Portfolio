import { MdMenu } from 'react-icons/md';
import { RxCrossCircled } from 'react-icons/rx';
import { useLanguage } from '../../hooks/useLanguage';

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

function HeaderMobileNavToggle({ isOpen, setIsOpen }: Props) {
  const { t } = useLanguage();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="icon-btn show-mobile"
      aria-label={
        isOpen
          ? t('aria-label.closeSectionMenu')
          : t('aria-label.openSectionMenu')
      }
      aria-expanded={isOpen}
      aria-controls="mobile-nav"
    >
      {isOpen ? (
        <RxCrossCircled className="icon-header" aria-hidden="true" />
      ) : (
        <MdMenu className="icon-header" aria-hidden="true" />
      )}
    </button>
  );
}

export default HeaderMobileNavToggle;
