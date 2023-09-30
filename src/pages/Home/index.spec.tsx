import { render, screen } from '@testing-library/react';
import { Home } from '.';
import { generalStrings } from '../../utils/generalStrings';

jest.mock('../../hooks/useTransaction', () => ({
  useTransaction: () => ({
    items: [],
    summary: {
      totalQuantity: 10,
      totalAmount: 1000,
      totalNetAmount: 900,
      totalAverageAmount: 100,
    },
    channelData: [],
  }),
}));

test('Renderiza o componente Home corretamente', () => {
  render(<Home />);
  
  const titleElement = screen.getByText(generalStrings.titleHome);
  expect(titleElement).toBeInTheDocument();
  
  const totalQuantityElement= screen.getByText(generalStrings.summaryLabels.totalQuantity);
  expect(totalQuantityElement).toBeInTheDocument();
  
  const totalAmountElement = screen.getByText(generalStrings.summaryLabels.totalAmount);
  expect(totalAmountElement).toBeInTheDocument();
  
  const totalNetAmountElement = screen.getByText(generalStrings.summaryLabels.totalNetAmount);
  expect(totalNetAmountElement).toBeInTheDocument();
  
  const totalAverageAmountElement = screen.getByText(generalStrings.summaryLabels.totalAverageAmount);
  expect(totalAverageAmountElement).toBeInTheDocument();
});
