import { render, screen } from "@testing-library/react";
import { TransactionTable } from "./Table";

describe('TransactionTable', () => {

    it('should render a table with transaction data', () => {
      const transactions = [
        {
          id: "114606514478703", 
          merchantId: "2000463023",
          paymentNode:485173,
          cnpjRoot:485116,
          date: "2021-05-26T12:12:55",
          paymentType: "Crédito à vista",
          cardBrand: "Mastercard",
          authorizationCode: "378216",
          truncatedCardNumber: "1014",
          grossAmount: 80.0,
          netAmount: 76.88,
          terminal: "00032668",
          administrationFee: 3.9,
          channelCode: 15,
          channel: "Super Link / Digitada",
          withdrawAmount: 0.0,
          minimumMDRAmmount: -3.12,
          mdrTaxAmount: 0.0,
          mdrFeeAmount: -3.12,
          status: "Aprovada"
        },
        {
          id: "124606514478704",
          merchantId: "2000463023",
          paymentNode: 485173,
          cnpjRoot: 485116,
          date: "2021-05-26T12:12:55",
          paymentType: "Crédito à vista",
          cardBrand: "Mastercard",
          authorizationCode: "378218",
          truncatedCardNumber: "1014",
          grossAmount: 80.0,
          netAmount: 76.88,
          terminal: "00032668",
          administrationFee: 3.9,
          channelCode: 15,
          channel: "Super Link / Digitada",
          withdrawAmount: 0.0,
          minimumMDRAmmount: -3.12,
          mdrTaxAmount: 0.0,
          mdrFeeAmount: -3.12,
          status: "Aprovada"
        },
      ];

      render(<TransactionTable transactions={transactions} />);

      expect(screen.getByRole('table')).toBeInTheDocument();

      expect(screen.getByText('ID')).toBeInTheDocument();
      expect(screen.getByText('Tipo de Pagamento')).toBeInTheDocument();
      expect(screen.getByText('Cartão')).toBeInTheDocument();
      expect(screen.getByText('Valor Bruto')).toBeInTheDocument();
      expect(screen.getByText('Valor Líquido')).toBeInTheDocument();
      expect(screen.getByText('Canal')).toBeInTheDocument();
      expect(screen.getByText('Status')).toBeInTheDocument();
      expect(screen.getByText('Visualizar')).toBeInTheDocument();

      expect(screen.getByText('114606514478703')).toBeInTheDocument();

      expect(screen.getByText('124606514478704')).toBeInTheDocument();
    });


});
