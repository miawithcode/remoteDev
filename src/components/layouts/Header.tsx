import BookmarkButton from "../BookmarkButton";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="flex items-baseline justify-between pb-8">
      <Logo />
      <BookmarkButton />
    </header>
  );
};
export default Header;
