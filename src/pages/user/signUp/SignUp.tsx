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
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, schema } from "./schema";
import { useSignUpSubmitMutation } from "@hooks/useMutation";
import { useNavigate } from "react-router-dom";

const steps = ["기본정보 입력", "프로필 설정"];

export default function SignUp() {
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);
  const mutation = useSignUpSubmitMutation();
  const navigate = useNavigate();
  const methods = useForm<signUpSchema>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    shouldUnregister: true,
    defaultValues: {
      userEmail: "",
      password: "",
      passwordConfirm: "",
      userNickname: "",
      profileImage: [],
    },
  });

  const nextClickHandler = (targetStep: string) => {
    setStep(targetStep);
  };

  const prevClickHandler = (targetStep: string) => {
    setStep(targetStep);
  };

  const onClickSubmit = async (data: signUpSchema) => {
    const { passwordConfirm, profileImage, ...formData } = data;

    const result = await mutation.mutate(formData);
    console.log(result);

    navigate("/user/signup/finish");
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
        <FormProvider {...methods}>
          <FormWrapper onSubmit={methods.handleSubmit(onClickSubmit)}>
            <SignUpStep
              steps={steps}
              nextClickHandler={nextClickHandler}
              prevClickHandler={prevClickHandler}
              Funnel={Funnel}
              Step={Step}
            />
          </FormWrapper>
        </FormProvider>
      </SignUpSection>
    </>
  );
}
