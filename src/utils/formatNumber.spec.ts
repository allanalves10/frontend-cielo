import formatNumber from "./formatNumber";

describe('formatNumber', () => {
    it('should return a string with dot separator for thousands when given a positive number', () => {
      expect(formatNumber(100)).toBe('100');
      expect(formatNumber(1000)).toBe('1.000');
      expect(formatNumber(10000)).toBe('10.000');
      expect(formatNumber(100000)).toBe('100.000');
      expect(formatNumber(1000000)).toBe('1.000.000');
    });
});
