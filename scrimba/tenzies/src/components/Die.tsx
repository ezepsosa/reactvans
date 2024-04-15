export default function Die({
  diceId,
  value,
  isHeld,
  holdIt,
}: {
  diceId: string;
  value: number;
  isHeld: boolean;
  holdIt: (id: string) => void;
}) {
  return (
    <div
      onClick={() => holdIt(diceId)}
      className={
        isHeld ? "die-element die-num die-element-held" : "die-element die-num"
      }
    >
      {value}
    </div>
  );
}
