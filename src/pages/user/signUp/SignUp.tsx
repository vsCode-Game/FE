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
import { signUpSchema } from "./schema";
import { useSignUpSubmitMutation } from "@hooks/useMutation";

const steps = ["기본정보 입력", "프로필 설정"];

export default function SignUp() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);
  const mutation = useSignUpSubmitMutation();

  const nextClickHandler = (targetStep: string) => {
    setStep(targetStep);
  };

  const prevClickHandler = (targetStep: string) => {
    setStep(targetStep);
  };

  const onSubmit: SubmitHandler<signUpSchema> = async (data) => {
    console.log("Submitted Data:", data);
    const { passwordConfirm, profileImage, ...formData } = data;

    const result = mutation.mutate(formData);
    console.log(result);
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
