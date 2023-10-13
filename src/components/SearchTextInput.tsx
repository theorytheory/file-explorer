import TextField from "@mui/material/TextField";

interface ISearchTextInput {
  className?: string;
}

function SearchTextInput({ className }: ISearchTextInput) {
  return (
    <div className={className}>
      <TextField label="Search..." variant="outlined" fullWidth />
    </div>
  );
}

export default SearchTextInput;
