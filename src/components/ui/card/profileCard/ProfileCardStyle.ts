import styled from "styled-components";

export const CardIndex = styled.div`
  width: 124px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 12px 12px 0px 0px;
  background: #9cdcff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  font-weight: 600;
  font-size: 14px;
  color: var(--color-gray-999);
  text-align: center;
  line-height: 46px;
`;

export const PlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 390px;
  height: 220px;
  flex-shrink: 0;
  border-radius: 0px 12px 12px 12px;
  background: #c8ecff;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 30px 20px;
`;
