import { ReactElement, ReactNode, useState } from "react";

export interface IStepProps {
  name: string;
  children: ReactNode;
}

export interface IFunnelProps {
  children: Array<ReactElement<IStepProps>>;
}

export const useFunnel = (defaultStep: string) => {
  const [step, setStep] = useState(defaultStep);

  const Step = (props: IStepProps): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: IFunnelProps) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step,
    );

    return <>{targetStep}</>;
  };

  return { Funnel, Step, setStep, currentStep: step } as const;
};
