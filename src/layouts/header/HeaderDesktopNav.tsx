import NavItems from '../../components/NavItems';

type Props = {
  scrollToSection: (sectionId: string) => void;
};

function HeaderDesktopNav({ scrollToSection }: Props) {
  return (
    <nav className="hidden-mobile items-center gap-6">
      <NavItems
        onClick={scrollToSection}
        className="icon-btn text-text-primary"
      />
    </nav>
  );
}

export default HeaderDesktopNav;
