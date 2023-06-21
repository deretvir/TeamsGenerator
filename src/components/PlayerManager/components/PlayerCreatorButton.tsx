type BtnProps = {
  handleCreatePlayer: () => void;
};

const PlayerCreatorButton = ({ handleCreatePlayer }: BtnProps) => {
  return <button onClick={handleCreatePlayer}>+</button>;
};

export { PlayerCreatorButton };
