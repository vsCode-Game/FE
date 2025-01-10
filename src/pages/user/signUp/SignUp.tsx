import Form from "@components/form/Form";
import SignUpStep from "./SignUpStep";
import { useFunnel } from "@hooks/useFunnel";
import {
  SignUpSection,
  SignUpTitle,
  StepActive,
  StepBasic,
  Steps,
} from "./SignUpStyle";

const steps = ["기본정보 입력", "프로필 설정"];

export default function SignUp() {
  const { Funnel, Step, setStep } = useFunnel(steps[0]);

  const nextClickHandler = (targetStep: any) => {
    setStep(targetStep);
  };

  const submitSignup = () => {};

  return (
    <>
      <SignUpSection>
        <SignUpTitle>회원가입</SignUpTitle>
        <Steps>
          <StepActive>1</StepActive>
          <StepBasic>2</StepBasic>
        </Steps>
        <Form formOptions={{ mode: "onChange" }} onSubmit={submitSignup}>
          <SignUpStep
            steps={steps}
            nextClickHandler={nextClickHandler}
            Funnel={Funnel}
            Step={Step}
          />
        </Form>
      </SignUpSection>
    </>
  );
}
