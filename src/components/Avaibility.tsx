import { memo } from "react";
import Box from "@mui/material/Box";
import DateInput from "./DateInput";
import { StepPropsType } from "./types";

const Skills = memo((props: StepPropsType) => {
  const { control } = props;
  return (
    <Box sx={{ width: "100%" }}>
      <div className="form-field">
        <DateInput
          control={control}
          label="When can you start in your new position"
          name="start_date"
        ></DateInput>
      </div>
      <div className="form-field">
        <DateInput
          control={control}
          label="Select the date for your first interview"
          name="first_interview_date"
        ></DateInput>
      </div>
      <div className="form-field">
        <DateInput
          control={control}
          label="Select another date for your second interview"
          name="second_interview_date"
        ></DateInput>
      </div>
    </Box>
  );
});

export default Skills;
