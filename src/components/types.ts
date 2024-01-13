import { Control, UseFormRegister } from "react-hook-form";

export type FormValues = {
  full_name: string;
  email: string;
  date_of_birth: Date;
  start_date: Date;
  first_interview_date: Date;
  second_interview_date: Date;
  react_experience: string;
  node_experience: string;
  aws_experience: string;
};

export type StepPropsType = {
  register: UseFormRegister<FormValues>;
  control: Control<FormValues>;
};
