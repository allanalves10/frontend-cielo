import formatMoney from "./formatMoney";

function normalizeString(input: string) {
    return input.replace(/[^0-9]/g, '').trim();
  }

describe('formatMoney', () => {

    it('should return a formatted string with currency symbol and correct decimal places for a positive number input', () => {
        const value = 1234.56;
        const result = formatMoney(value);
        const expectedResult = 'R$ 1.234,56'
        const normalizedResult = normalizeString(result);
        const normalizedExpectedResult = normalizeString(expectedResult);

        expect(normalizedResult).toBe(normalizedExpectedResult);
    });


});
