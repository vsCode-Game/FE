import { ReactElement, ReactNode, useState } from "react";

export interface iStepProps {
  name: string;
  children: ReactNode;
}

export interface iFunnelProps {
  children: Array<ReactElement<iStepProps>>;
}

export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState(defaultStep);

  const Step = (props: iStepProps): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: iFunnelProps) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step,
    );

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step } as const;
};
