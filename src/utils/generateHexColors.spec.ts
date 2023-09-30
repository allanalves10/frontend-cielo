import { generateHexColors } from "./generateHexColors";

describe('generateHexColors', () => {
    it('should generate an array of hex color codes with the length equal to the input count', () => {
      const count = 5;
      const result = generateHexColors(count);
      expect(result).toHaveLength(count);
      result.forEach(color => {
        expect(color).toMatch(/^#[0-9A-F]{6}$/i);
      });
    });


});
