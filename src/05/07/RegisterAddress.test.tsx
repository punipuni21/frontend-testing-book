import { render, screen } from "@testing-library/react";
import { mockPostMyAddress } from "./fetchers/mock";
import {
  clickSubmit,
  inputContactNumber,
  inputDeliveryAddress,
} from "./testingUtil";
import { RegisterAddress } from "./RegisterAddress";

jest.mock("./fetchers");

async function fillValuesAndSubmit() {
  const contactNumber = await inputContactNumber();
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

async function fillInvalidValuesAndSubmit() {
  const contactNumber = await inputContactNumber({
    name: "田中 太郎",
    phoneNumber: "abc-defg-hijkl",
  });
  const deliveryAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliveryAddress };
  await clickSubmit();
  return submitValues;
}

beforeEach(() => {
  jest.resetAllMocks();
});

test("成功時「登録しました」が表示される", async () => {
  const mockFn = mockPostMyAddress();
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("登録しました")).toBeInTheDocument();
});

test("失敗時「登録に失敗しました」が表示される", async () => {
  const mockFn = mockPostMyAddress(500);
  render(<RegisterAddress />);
  const submitValues = await fillValuesAndSubmit();
  expect(mockFn).toHaveBeenCalledWith(expect.objectContaining(submitValues));
  expect(screen.getByText("登録に失敗しました")).toBeInTheDocument();
});

test("バリデーションエラー時，メッセージが表示される", async () => {
  render(<RegisterAddress />);
  await fillInvalidValuesAndSubmit();
  expect(screen.getByText("不正な入力値が含まれています")).toBeInTheDocument();
});

test("不明なエラー時，メッセージが表示される", async () => {
  render(<RegisterAddress />);
  await fillValuesAndSubmit();
  expect(screen.getByText("不明なエラーが発生しました")).toBeInTheDocument();
});
