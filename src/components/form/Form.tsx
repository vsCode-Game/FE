import React from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  UseFormProps,
  FieldValues,
} from "react-hook-form";

interface FormInterface<TFormData extends FieldValues> {
  children: React.ReactNode;
  onSubmit: SubmitHandler<TFormData>;
  formOptions?: UseFormProps<TFormData>;
}

export default function Form<TFormData extends FieldValues>({
  children,
  onSubmit,
  formOptions,
}: FormInterface<TFormData>) {
  const methods = useForm<TFormData>(formOptions);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
