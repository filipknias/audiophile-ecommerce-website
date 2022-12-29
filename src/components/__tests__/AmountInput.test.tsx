import { AmountInput } from "components/products";
import { render } from "utilities/testUtils";
import { fireEvent } from "utilities/testUtils";

describe("amount input component", () => {
  it("should display amount", () => {
    const amount = 1;
    const onAmountDecrease = () => {}
    const onAmountIncrease = () => {}

    const { getByRole } = render(
      <AmountInput
        amount={amount}
        onAmountIncrease={onAmountIncrease}
        onAmountDecrease={onAmountDecrease}
      />
    );

    const amountText = getByRole('amount-display');
    expect(amountText).toHaveTextContent(amount.toString());
  });
});