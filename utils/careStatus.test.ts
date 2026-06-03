import { expect, test, describe } from "@jest/globals";
import careStatus from "./careStatus";

describe("careStatus", () => {
  test('careStatus returns "Crisis" when follow-up is scheduled for within 48 hours', () => {
    expect(careStatus(new Date("2024-06-01"), new Date("2024-06-02"))).toBe(
      "Crisis",
    );
  });
  test('careStatus returns "Check-in Soon" when follow-up is scheduled for within the next week', () => {
    expect(
      careStatus(
        new Date("2024-06-01"),
        new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      ),
    ).toBe("Check-in Soon");
  });
  test('careStatus returns "Overdue" when follow-up date has passed', () => {
    expect(
      careStatus(
        new Date("2024-06-01"),
        new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      ),
    ).toBe("Overdue");
  });
  test('careStatus returns "Active" when follow-up is scheduled for more than a week away', () => {
    expect(
      careStatus(
        new Date("2024-06-01"),
        new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      ),
    ).toBe("Active");
  });
  test('careStatus returns "No Contact" when lastContact is not provided', () => {
    expect(careStatus(null, new Date("2024-06-02"))).toBe("No Contact");
  });
});
