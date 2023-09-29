import { ItemData } from "../types/ItemTypes";

export function infoCardBrands(transactions: ItemData[]): { cardBrand: string; count: number }[] {
    const cardBrands: { [key: string]: number } = {};
  
    for (const transaction of transactions) {
      const cardBrand = transaction.cardBrand;
      if (!cardBrands[cardBrand]) {
        cardBrands[cardBrand] = 0;
      }
      cardBrands[cardBrand]++;
    }
  
    const uniqueCardBrands = Object.keys(cardBrands);
    const cardBrandCounts = uniqueCardBrands.map((cardBrand) => ({ cardBrand, count: cardBrands[cardBrand] }));
  
    return cardBrandCounts;
  }