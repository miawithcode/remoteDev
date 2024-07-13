import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type SearchFormProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ searchText, setSearchText }: SearchFormProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
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
