import TextField from "@mui/material/TextField";
import { useRecoilState } from "recoil";
import searchState from "../atoms/searchState";

interface ISearchTextInput {
  className?: string;
}

function SearchTextInput({ className }: ISearchTextInput) {
  const [searchString, setSearchString] = useRecoilState(searchState);

  return (
    <div className={className}>
      <TextField
        label="Search..."
        variant="outlined"
        fullWidth
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
    </div>
  );
}

export default SearchTextInput;
