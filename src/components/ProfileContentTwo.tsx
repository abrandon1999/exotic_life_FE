import ColorSelection from "./ColorSelection";
import InterestSelection from "./InterestSelection";

interface Props {
  onSelectedInterests: (interests: string[]) => void;
}
export default function ProfileContentTwo({ onSelectedInterests }: Props) {
  return (
    <div>
      <InterestSelection onSelectedInterests={onSelectedInterests} />
      <ColorSelection />
    </div>
  );
}
