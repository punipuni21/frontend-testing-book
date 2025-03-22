type Props = {
  name: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void; // whats's this?
};

export const Form = ({ name, onSubmit }: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(event);
      }}
    >
      <h2>account info</h2>
      <p>{name}</p>
      <div>
        <button>edit</button>
      </div>
    </form>
  );
};
