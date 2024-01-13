import { memo } from "react";
import Box from "@mui/material/Box";
import ExperienceSelect from "./ExperienceSelect";
import { StepPropsType } from "./types";

const Skills = memo((props: StepPropsType) => {
  const {register} = props;
  return (
    <Box sx={{ width: "100%" }}>
      <div className="form-field">
        <ExperienceSelect label="How long have you been working with React" register={register} name='react_experience'></ExperienceSelect>
      </div>
      <div className="form-field">
        <ExperienceSelect label="How long have you been working with NodeJs" register={register} name='node_experience'></ExperienceSelect>
      </div>
      <div className="form-field">
        <ExperienceSelect label="How long have you been working with AWS" register={register} name='aws_experience'></ExperienceSelect>
      </div>
    </Box>
  );
});

export default Skills;
