export const InputAccount = () => {
  return (
    <fieldset>
      <legend>input account info</legend>
      <div>
        <label>
          mail address
          <input type="text" placeholder="example@test.com" />
        </label>
      </div>
      <div>
        <label>
          password
          <input type="password" placeholder="input more than 8 characters" />
        </label>
      </div>
    </fieldset>
  );
};
