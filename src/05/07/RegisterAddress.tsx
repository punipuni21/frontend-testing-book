import { useState } from "react";
import { Form } from "../06/Form";
import { handleSubmit } from "./handleSubmit";
import { checkPhoneNumber, ValidationError } from "./validation";
import { postMyAddress } from "./fetchers";

export const RegisterAddress: React.FC = () => {
  const [postResult, setPostResult] = useState("");
  return (
    <div>
      <Form
        onSubmit={handleSubmit((values) => {
          try {
            checkPhoneNumber(values.phoneNumber);
            postMyAddress(values)
              .then(() => {
                setPostResult("登録しました");
              })
              .catch(() => {
                setPostResult("登録に失敗しました");
              });
          } catch (err) {
            if (err instanceof ValidationError) {
              setPostResult("不正な入力値が含まれています");
              return;
            }
            setPostResult("不明なエラーが発生しました");
          }
        })}
      />
      {postResult && <p>{postResult}</p>}
    </div>
  );
};
