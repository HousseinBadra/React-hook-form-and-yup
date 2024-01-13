import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "./types";
import { TextField } from "@mui/material";

interface ExperinceSelectProps<T> {
  label: string;
  register: UseFormRegister<FormValues>;
  name: T extends keyof FormValues ? T : string;
}

export default function ExperienceSelect<T>(props: ExperinceSelectProps<T>) {
  const { label, register, name } = props;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <TextField
          select
          id="demo-simple-select"
          label={label}
          defaultValue={'default'}
          variant="outlined"
          placeholder=""
          {...register(name as keyof FormValues)}
        >
          <MenuItem value={"default"}>----------</MenuItem>
          <MenuItem value={"Less than one"}>Less than one</MenuItem>
          <MenuItem value={"One to theree"}>One to theree</MenuItem>
          <MenuItem value={"Three or more"}>Three or more</MenuItem>
        </TextField>
      </FormControl>
    </Box>
  );
}
