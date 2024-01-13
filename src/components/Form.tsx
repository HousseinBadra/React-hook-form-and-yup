import { useEffect, useState } from "react";
import Layout from "./Layout";
import PersonalInformation from "./PersonalInformation";
import Avaibility from "./Avaibility";
import Skills from "./Skills";
import { useForm } from "react-hook-form";
import { FormValues } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./shema";

function Form() {
  const [loading, setloading] = useState(false);
  const { register, handleSubmit, control, formState: {errors} } = useForm<FormValues>({
    resolver: yupResolver(schema), // integrate Yup with RHF
  });

  const onSubmit = handleSubmit((data) => {
    setloading(true);
    setTimeout(() => {
      console.log(data);
      setloading(false);
    }, 1000);
  });

  useEffect(() => {
    console.log(errors)
  }, [errors])

  return (
    <>
      <Layout handleSubmit={onSubmit} loading={loading}>
        <PersonalInformation
          register={register}
          control={control}
        ></PersonalInformation>
        <Skills register={register} control={control}></Skills>
        <Avaibility register={register} control={control}></Avaibility>
      </Layout>
    </>
  );
}

export default Form;
