import Form from "@components/form/Form";
import SignUpStep from "./SignUpStep";
import { useFunnel } from "@hooks/useFunnel";
import {
  FormWrapper,
  SignUpSection,
  SignUpTitle,
  CurrentStep,
  StepBasic,
  Stepper,
} from "./SignUpStyle";
import { SubmitHandler } from "react-hook-form";
import axios from "axios";
import { signUpSchema } from "./schema";

const steps = ["기본정보 입력", "프로필 설정"];

export default function SignUp() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);
  const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;

  const nextClickHandler = (targetStep: string) => {
    setStep(targetStep);
  };

  const prevClickHandler = (targetStep: string) => {
    setStep(targetStep);
  };

  const onSubmit: SubmitHandler<signUpSchema> = async (data) => {
    console.log("Submitted Data:", data);
    const { passwordConfirm, profileImage, ...rest } = data;

    try {
      const res = await axios.post(`${BASE_URL}/user/signup`, rest);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <SignUpSection>
        <SignUpTitle>회원가입</SignUpTitle>
        <Stepper>
          {currentStep === steps[0] ? (
            <>
              <CurrentStep>1</CurrentStep>
              <StepBasic>2</StepBasic>
            </>
          ) : (
            <>
              <StepBasic>1</StepBasic>
              <CurrentStep>2</CurrentStep>
            </>
          )}
        </Stepper>
        <Form<FormData>
          onSubmit={onSubmit}
          formOptions={{
            defaultValues: {
              userEmail: "",
              password: "",
              passwordConfirm: "",
              userNickname: "",
              profileImage: [""],
            },
          }}
        >
          <FormWrapper>
            <SignUpStep
              steps={steps}
              nextClickHandler={nextClickHandler}
              prevClickHandler={prevClickHandler}
              Funnel={Funnel}
              Step={Step}
            />
          </FormWrapper>
        </Form>
      </SignUpSection>
    </>
  );
}
