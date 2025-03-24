import {
  clickSubmit,
  inputContactNumber,
  inputDeliveryAddress,
} from "./testingUtil";

async function fillValuesAndSubmit() {
  const contactNumber = await inputContactNumber();
  const deliverAddress = await inputDeliveryAddress();
  const submitValues = { ...contactNumber, ...deliverAddress };
  await clickSubmit();
  return submitValues;
}
