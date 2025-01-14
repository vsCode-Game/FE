import SignUpStepOne from "./SignUpStepOne";
import SignUpStepTwo from "./SignUpStepTwo";
import { IFunnelProps, IStepProps } from "../../../hooks/useFunnel";

export interface ISignUpProps {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  prevClickHandler: (prevStep: string) => void;
  Funnel: React.ComponentType<IFunnelProps>;
  Step: React.ComponentType<IStepProps>;
}

export default function SignUpStep({
  steps,
  nextClickHandler,
  prevClickHandler,
  Funnel,
  Step,
}: ISignUpProps) {
  return (
    <>
      <Funnel>
        <Step name="기본정보 입력">
          <SignUpStepOne onNext={() => nextClickHandler(steps[1])} />
        </Step>
        <Step name="프로필 설정">
          <SignUpStepTwo onPrev={() => prevClickHandler(steps[0])} />
        </Step>
      </Funnel>
    </>
  );
}
