import styled from "styled-components";

export const DeckContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 171px;
  height: 80px;
  border-radius: 12px;
  border: 1px solid var(--color-gray-999);
  background: linear-gradient(
    180deg,
    var(--color-gray-100) 0%,
    var(--color-gray-200) 100%
  );
`;
