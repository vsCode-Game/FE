import React, { useState } from "react";

export default function Joker() {
  // 초기 데이터
  const datas = {
    message: "조커카드의 위치를 정해주세요.",
    finalHand: [
      { color: "black", num: 1, isFlipped: false },
      { color: "white", num: 2, isFlipped: false },
      { color: "white", num: 8, isFlipped: false },
    ],
    jokerCard: {
      color: "white",
      num: -1,
      isFlipped: false,
    },
    // 예시: 넣을 수 있는 위치가 0, 1, 3만 가능하다고 가정
    possiblePositions: [1, 2],
  };

  // 실제(확정) 카드 배열 상태
  const [finalHand, setFinalHand] = useState(datas.finalHand);
  // 미리보기용 카드 배열 상태
  const [previewHand, setPreviewHand] = useState(datas.finalHand);

  // 해당 위치에 마우스를 올렸을 때 (미리보기)
  const handleMouseEnter = (pos) => {
    if (!datas.possiblePositions.includes(pos)) return; // 가능한 위치가 아니라면 무시
    const newHand = [...finalHand];
    newHand.splice(pos, 0, datas.jokerCard);
    setPreviewHand(newHand);
  };

  // 마우스가 빠져나갔을 때 (미리보기 초기화)
  const handleMouseLeave = () => {
    setPreviewHand(finalHand);
  };

  // 클릭 시 (실제 삽입)
  const handleClick = (pos) => {
    if (!datas.possiblePositions.includes(pos)) return; // 가능한 위치가 아니라면 무시
    const newHand = [...finalHand];
    newHand.splice(pos, 0, datas.jokerCard);
    setFinalHand(newHand);
    setPreviewHand(newHand);
  };

  return (
    <div>
      <h3>{datas.message}</h3>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        {/* 
            previewHand를 기준으로 카드 렌더링 
            삽입 가능한 인덱스를 표현하기 위해 
            각 카드 앞쪽 + 마지막 카드 뒤쪽을 고려 
          */}
        {previewHand.map((card, index) => (
          <React.Fragment key={index}>
            {/* 
                카드 앞쪽 위치에 삽입 마커 
                index 값이 possiblePositions에 있을 때만 표시 
              */}
            {datas.possiblePositions.includes(index) && (
              <PositionMarker
                pos={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              />
            )}

            {/* 실제 카드 표시 */}
            <CardView card={card} />

            {/* 
                만약 마지막 카드라면, 
                "마지막 위치" (previewHand.length)도 
                possiblePositions에 포함되어 있는지 확인해서 표시 
              */}
            {index === previewHand.length - 1 &&
              datas.possiblePositions.includes(previewHand.length) && (
                <PositionMarker
                  pos={previewHand.length}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={handleClick}
                />
              )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// 삽입 가능한 위치를 시각적으로 표시하는 컴포넌트
function PositionMarker({ pos, onMouseEnter, onMouseLeave, onClick }) {
  const markerStyle = {
    width: "20px",
    height: "40px",
    backgroundColor: "rgba(0,255,0,0.2)", // 초록색 반투명
    display: "inline-block",
    cursor: "pointer",
    margin: "0 5px", // 카드와 약간 간격
  };

  return (
    <div
      style={markerStyle}
      onMouseEnter={() => onMouseEnter(pos)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(pos)}
    />
  );
}

// 실제 카드 하나를 보여주는 컴포넌트
function CardView({ card }) {
  const cardStyle = {
    display: "inline-block",
    padding: "10px",
    border: "1px solid #ccc",
    minWidth: "60px",
    textAlign: "center",
  };
  return (
    <div style={cardStyle}>
      {card.color} - {card.num}
    </div>
  );
}
