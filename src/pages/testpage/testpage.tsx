import BackDeck from "../../components/ui/deck/backDeck";
import FrontDeck from "../../components/ui/deck/FrontDeck";

export default function Testpage() {
  return (
    <div>
      <FrontDeck color="black" value="2" />
      <FrontDeck color="white" value="6" />
      <FrontDeck color="black" value="9" />
      <BackDeck color="black" />
      <BackDeck color="white" />
    </div>
  );
}
