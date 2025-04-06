import styled from "styled-components";

export const SignUpSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  height: 100%;
`;

export const SignUpTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

export const Stepper = styled.ul`
  display: flex;
  border-radius: 12px;
  background-color: var(--color-gray-200);
  width: 180px;
  height: 25px;

  > li {
    width: 90px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
  }
`;

export const StepBasic = styled.li`
  background-color: var(--color-gray-200);
`;

export const CurrentStep = styled.li`
  background-image: radial-gradient(
    120% 120% at 50% 100%,
    var(--color-primary) 0%,
    var(--color-gray-0) 100%
  );
  border: 1px solid var(--color-gray-999);
  font-weight: 500;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 550px;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  flex-grow: 1;
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
`;

export const Tip = styled.p`
  color: var(--color-gray-400);
  font-weight: 300;
  margin-top: 15px;
`;

export const InputBox = styled.div`
  width: 400px;
`;

export const StyledLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ButtonLabel = styled.label`
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: var(--color-warning);
  margin-top: 10px;
  min-height: 14px;
`;

export const AgreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AgreeBox = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckLabel = styled.label`
  font-size: 12px;
  font-weight: 200;
  color: var(--color-gray-999);
  flex-grow: 1;
`;

export const ProfileImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 0px auto 30px;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  border: 4px solid var(--color-gray-300);
`;

export const AddImageButton = styled.label`
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgba(51, 86, 53, 1);
  color: #fff;
  border-radius: 25px;
  font-weight: 300;
  transition: all 0.3s ease-out;
  cursor: pointer;
  flex-grow: 1;

  &:hover {
    background-color: rgba(85, 162, 90, 1);
  }
`;

export const DeleteButton = styled.button`
  width: 10%;
`;

export const DeleteIcon = styled.img`
  width: auto;
  height: 50px;
`;
