import React, { useState } from "react";
import { ContactNumber } from "./ContactNumber";
import { RegisterDeliveryAddress } from "./RegisterDeliverryAddress";
import { DeliveryAddress } from "./DeliverryAddress";
import { PastDeliveryAddress } from "./PastDeliverryAddress";

export type AddressOption = React.ComponentProps<"option"> & { id: string };
export type Props = {
  deliveryAddress: AddressOption[];
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = (props: Props) => {
  const [registerNew, setRegisterNew] = useState<boolean | undefined>(
    undefined
  );
  return (
    <form onSubmit={props.onSubmit}>
      <h2>お届け先情報の入力</h2>
      <ContactNumber />
      {props.deliveryAddress?.length ? (
        <>
          <RegisterDeliveryAddress onChange={setRegisterNew} />
          {registerNew ? (
            <DeliveryAddress title="新しいお届け先" />
          ) : (
            <PastDeliveryAddress
              disabled={registerNew === undefined}
              options={props.deliveryAddress}
            />
          )}
        </>
      ) : (
        <DeliveryAddress />
      )}
      <hr />
      <div>
        <button>注文内容の確認へ進む</button>
      </div>
    </form>
  );
};
