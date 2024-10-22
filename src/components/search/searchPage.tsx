import { SearchBar } from "@yext/search-ui-react";
import SearchNav from "./searchNav";
import SearchResults from "./searchResults";
import { useTypingEffect } from "../useTypeEffect";

const SearchPage = () => {
  const queryPrompts = useTypingEffect(import.meta.env.YEXT_PUBLIC_API_KEY,
    import.meta.env.YEXT_PUBLIC_EXP_KEY);
  return (
    <main className="flex flex-col gap-2">
      <header className="w-full centered-container">
        <SearchBar customCssClasses={{ inputElement: "demo " }} />
        <SearchNav />
      </header>
      <section aria-label="Search Results">
        <SearchResults />
      </section>
    </main>
  );
};

export default SearchPage;
