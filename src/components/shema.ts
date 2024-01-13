import * as yup from "yup";

const schema = yup.object().shape({
  full_name: yup.string().required(),
  email: yup.string().required().email(),
  date_of_birth: yup
    .date()
    .required()
    .test("Sorry we don't hire undeaged", (value) => {
      return value.getFullYear() < 2000;
    }),
  start_date: yup.date().required(),
  first_interview_date: yup.date().required(),
  second_interview_date: yup.date().required(),
  react_experience: yup
    .string()
    .required()
    .test("valid experience", (value) => {
      return (
        value === "Less than one" ||
        value === "One to three" ||
        value === "Three or more"
      );
    }),
  node_experience: yup
    .string()
    .required()
    .test("valid experience", (value) => {
      return (
        value === "Less than one" ||
        value === "One to three" ||
        value === "Three or more"
      );
    }),
  aws_experience: yup
    .string()
    .required()
    .test("valid experience", (value) => {
      return (
        value === "Less than one" ||
        value === "One to three" ||
        value === "Three or more"
      );
    }),
});

export default schema;
