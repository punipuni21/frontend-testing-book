import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

async function inputContactNumber({
  inputValues = {
    name: "taro",
    phoneNumber: "090-1234-5678",
  },
}) {
  await user.type(
    screen.getByRole("textbox", { name: "電話番号" }),
    inputValues.phoneNumber
  );
  await user.type(
    screen.getByRole("textbox", { name: "お名前" }),
    inputValues.name
  );
  return inputValues;
}

async function inputDeliveryAddress(
  inputValues = {
    postalCode: "167-0051",
    prefectures: "東京都",
    municipalities: "杉並区荻窪1",
    streetNumber: "00-00",
  }
) {
  await user.type(
    screen.getByRole("textbox", { name: "郵便番号" }),
    inputValues.postalCode
  );
  await user.type(
    screen.getByRole("textbox", { name: "都道府県" }),
    inputValues.prefectures
  );
  await user.type(
    screen.getByRole("textbox", { name: "市区町村" }),
    inputValues.municipalities
  );
  await user.type(
    screen.getByRole("textbox", { name: "番地番号" }),
    inputValues.streetNumber
  );
  return inputValues;
}
