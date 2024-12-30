import Badge from "./Badge";

export default function BadgePage() {
  return (
    <div>
      <Badge status="waiting..." children={undefined} />
      <Badge status="playing" children={undefined} />
      <Badge status="not Ready" children={undefined} />
    </div>
  );
}
