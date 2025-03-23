import { useId, useState } from "react";
import { InputAccount } from "./InputAccount";
import { Agreement } from "./Agreement";

export const Form = () => {
  const [checked, setChecked] = useState(false);
  const headingId = useId();

  return (
    <form area-labelledby={headingId}>
      <h2 id={headingId}>register new account</h2>
      <InputAccount />
      <Agreement
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
      <div>
        <button disabled={!checked}>sign up</button>
      </div>
    </form>
  );
};
