import NavItems from '../../components/NavItems';

type Props = {
  scrollToSection: (sectionId: string) => void;
  isOpen: boolean;
};

function HeaderMobileNavMenu({ scrollToSection, isOpen }: Props) {
  return (
    <nav
      id="mobile-nav"
      className="show-mobile bg-subcomponent"
      hidden={!isOpen}
      aria-hidden={!isOpen}
    >
      <div className="flex flex-col">
        <NavItems
          onClick={scrollToSection}
          className="text-left py-4 px-2 text-text-primary border-b border-text-primary"
        />
      </div>
    </nav>
  );
}

export default HeaderMobileNavMenu;
