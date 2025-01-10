import SignUpStepOptional from "./SignUpStepOptional";
import SignUpStepRequired from "./SignUpStepRequired";
import { FunnelProps, StepProps } from "../../../hooks/useFunnel";

export interface SignUpProps {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

export default function SignUpStep({
  steps,
  nextClickHandler,
  Funnel,
  Step,
}: SignUpProps) {
  return (
    <>
      <Funnel>
        <Step name="기본정보 입력">
          <SignUpStepRequired onNext={() => nextClickHandler(steps[1])} />
        </Step>
        <Step name="프로필 설정">
          <SignUpStepOptional />
        </Step>
      </Funnel>
    </>
  );
}
