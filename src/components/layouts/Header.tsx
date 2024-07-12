import BookmarkButton from "../BookmarkButton";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="flex items-baseline justify-between pt-12">
      <Logo />
      <BookmarkButton />
    </header>
  );
};
export default Header;
