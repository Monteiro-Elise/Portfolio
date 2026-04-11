import NavItems from '../../components/NavItems';

type Props = {
  scrollToSection: (sectionId: string) => void;
};

function HeaderMobileNavMenu({ scrollToSection }: Props) {
  return (
    <nav id="mobile-nav" className="show-mobile bg-subcomponent">
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
