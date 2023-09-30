import { ItemData } from "../types/ItemTypes";
import { infoCardBrands } from "./infoCardBrands";

describe('infoCardBrands', () => {
    it('should return an array of objects with cardBrand and count properties when passed an array of transactions with valid cardBrand values', () => {
      const transactions: ItemData[] = [
        {
          id: "1",
          merchantId: "123",
          paymentNode: 1,
          cnpjRoot: 123,
          date: "2021-01-01",
          paymentType: "credit",
          cardBrand: "Visa",
          authorizationCode: "123456",
          truncatedCardNumber: "1234",
          grossAmount: 100,
          netAmount: 90,
          terminal: "A",
          administrationFee: 10,
          channelCode: 1,
          channel: "Online",
          withdrawAmount: 0,
          minimumMDRAmmount: 0,
          mdrTaxAmount: 0,
          mdrFeeAmount: 0,
          status: "approved"
        },
        {
          id: "2",
          merchantId: "456",
          paymentNode: 2,
          cnpjRoot: 456,
          date: "2021-01-02",
          paymentType: "debit",
          cardBrand: "Mastercard",
          authorizationCode: "654321",
          truncatedCardNumber: "5678",
          grossAmount: 200,
          netAmount: 180,
          terminal: "B",
          administrationFee: 20,
          channelCode: 2,
          channel: "In-store",
          withdrawAmount: 0,
          minimumMDRAmmount: 0,
          mdrTaxAmount: 0,
          mdrFeeAmount: 0,
          status: "approved"
        },
        {
          id: "3",
          merchantId: "789",
          paymentNode: 3,
          cnpjRoot: 789,
          date: "2021-01-03",
          paymentType: "credit",
          cardBrand: "Visa",
          authorizationCode: "987654",
          truncatedCardNumber: "9012",
          grossAmount: 300,
          netAmount: 270,
          terminal: "C",
          administrationFee: 30,
          channelCode: 3,
          channel: "Mobile",
          withdrawAmount: 0,
          minimumMDRAmmount: 0,
          mdrTaxAmount: 0,
          mdrFeeAmount: 0,
          status: "approved"
        }
      ];

      const result = infoCardBrands(transactions);

      expect(result).toEqual([
        { cardBrand: "Visa", count: 2 },
        { cardBrand: "Mastercard", count: 1 }
      ]);
    });

    it('should return an empty array when passed an empty array of transactions', () => {
      const transactions: ItemData[] = [];
      const result = infoCardBrands(transactions);
      expect(result).toEqual([]);
    });
});
