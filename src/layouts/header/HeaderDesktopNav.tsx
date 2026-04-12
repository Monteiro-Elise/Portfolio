import NavItems from './NavItems';

type Props = {
  scrollToSection: (sectionId: string) => void;
};

function HeaderDesktopNav({ scrollToSection }: Props) {
  return (
    <nav className="hidden-mobile items-center gap-6" aria-label="desktop nav">
      <NavItems
        onClick={scrollToSection}
        className="icon-btn text-text-primary"
      />
    </nav>
  );
}

export default HeaderDesktopNav;
