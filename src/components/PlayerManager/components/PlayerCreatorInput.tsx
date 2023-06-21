import { ChangeEvent, KeyboardEvent, RefObject } from "react";

type InputProps = {
  handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEnterKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
  name: string;
};

const PlayerCreatorInput = ({
  handleNameChange,
  handleEnterKeyDown,
  inputRef,
  name,
}: InputProps) => {
  return (
    <input
      type="text"
      value={name}
      ref={inputRef}
      onChange={handleNameChange}
      onKeyDown={handleEnterKeyDown}
    />
  );
};

export { PlayerCreatorInput };
