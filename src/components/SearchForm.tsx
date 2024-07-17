import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import useSearchTextContext from "../hooks/useSearchTextContext";

const SearchForm = () => {
  const { searchText, handleChangeSearchText } = useSearchTextContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeSearchText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2 rounded-t-lg border-b border-slate-200 bg-white px-4 py-3"
    >
      <button type="submit">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>

      <input
        value={searchText}
        onChange={handleChange}
        className="w-full tracking-wide focus:outline-none"
        type="text"
        placeholder="Find your next remote dev jobs..."
        spellCheck="false"
        required
      />
    </form>
  );
};
export default SearchForm;
