import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useDebounce } from "./useDebounce";
import { Doc } from "@/convex/_generated/dataModel";

export const useUserSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms debounce

  const searchResults = useQuery(
    api.users.searchUser,
    debouncedSearchTerm.trim() ? { searchTerm: debouncedSearchTerm } : "skip",
  );

  return {
    searchTerm,
    setSearchTerm,
    searchResults: (searchResults || []) as Doc<"users">[],
    isLoading: searchResults === undefined && debouncedSearchTerm.trim() !== "",
  };
};
