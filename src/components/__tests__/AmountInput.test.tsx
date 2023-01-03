import { AmountInput } from "components/products";
import { render } from "utilities/testUtils";
import { fireEvent } from "utilities/testUtils";
import { vi } from 'vitest';

describe("amount input component", () => {
  it("should display amount", () => {
    const amount = 1;
    const mockOnAmountIncrease = vi.fn();
    const mockOnAmountDecrease = vi.fn();

    const { getByRole } = render(
      <AmountInput
        amount={amount}
        onAmountIncrease={mockOnAmountIncrease}
        onAmountDecrease={mockOnAmountDecrease}
      />
    );

    const amountText = getByRole('amount-display');
    expect(amountText).toHaveTextContent(amount.toString());
  });

  it("should fire callback", () => {
    const amount = 1;
    const mockOnAmountIncrease = vi.fn();
    const mockOnAmountDecrease = vi.fn();

    const { getByRole } = render(
      <AmountInput
        amount={amount}
        onAmountIncrease={mockOnAmountIncrease}
        onAmountDecrease={mockOnAmountDecrease}
      />
    );

    const increaseButton = getByRole('increase-button');
    const decreaseButton = getByRole('decrease-button');

    fireEvent.click(increaseButton);
    expect(mockOnAmountIncrease).toHaveBeenCalled();

    fireEvent.click(decreaseButton);
    expect(mockOnAmountDecrease).toHaveBeenCalled();
  });
});