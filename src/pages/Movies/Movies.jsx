import { SearchForm } from "./Movies.styled";

export const Movies = () => {
  return (
    <div>
      <SearchForm>
        <input
          type="text"
          name="findForm"
          placeholder="Search films"
        />
        <button type="submit">Search</button>
      </SearchForm>
    </div>
  );
};
