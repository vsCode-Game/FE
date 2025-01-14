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

const steps = ["기본정보 입력", "프로필 설정"];

export default function SignUp() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);

  const nextClickHandler = (targetStep: string) => {
    setStep(targetStep);
  };

  const prevClickHandler = (targetStep: string) => {
    setStep(targetStep);
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Submitted Data:", data);
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
              email: "",
              password: "",
              passwordConfirm: "",
              nickname: "",
              profileImage: "",
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
