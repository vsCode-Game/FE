import styled from "styled-components";

interface IBigDeckButton {
  themeType: "light" | "black";
}
export const container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

export const title = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 24px;
  color: var(--color-gray-999);
  text-align: center;
`;

export const bigDeckContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const bigDeckButton = styled.button<IBigDeckButton>`
  width: 100px;
  height: 200px;

  background: ${({ themeType }) =>
    themeType === "light"
      ? "linear-gradient(166.96deg, #FFFFFF 0.69%, #F8F8F8 99.31%)"
      : "linear-gradient(167.01deg, #6C6C6C 0.72%, #000000 99.28%)"};
  border: 1px solid var(--color-gray-999);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border: 4px solid var(--color-primary);
  }
`;
