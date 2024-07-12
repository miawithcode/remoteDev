import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const SearchForm = () => {
  return (
    <form className="flex items-center justify-center gap-2 rounded-t-lg border-b border-slate-200 bg-white px-4 py-3">
      <MagnifyingGlassIcon className="h-6 w-6" />
      <input
        className="w-full tracking-wide focus:outline-none"
        type="text"
        placeholder="Find your next remote dev jobs..."
      />
    </form>
  );
};
export default SearchForm;
