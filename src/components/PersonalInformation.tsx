import { memo } from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import DateInput from "./DateInput";
import { StepPropsType } from "./types";

const PersonalInformation = memo((props: StepPropsType) => {
  const {register, control} = props;
  return (
    <Box sx={{ width: "100%" }}>
      <div className="form-field">
        <TextField label="Fullname" variant="outlined" fullWidth {...register('full_name')}/>
      </div>
      <div className="form-field">
        <TextField label="Email" variant="outlined" type="email" fullWidth {...register('email')}/>
      </div>
      <div className="form-field">
        <DateInput control={control} name="date_of_birth" label="Date of birth"/>
      </div>
    </Box>
  );
});

export default PersonalInformation;
