import { render, screen } from "@testing-library/react";
import StatsCard from "./StatsCard";

describe('StatsCard', () => {
    it('should render the component with a number as stat', () => {
      const title = 'Test Title';
      const stat = 123;

      render(<StatsCard title={title} stat={stat} />);

      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(stat.toString())).toBeInTheDocument();
    });


});
