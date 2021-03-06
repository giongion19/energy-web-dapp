import { render, screen } from '@testing-library/react';
import DID from './DID';

test('renders DID component', () => {
    render(<DID account={"account"} />);
    const linkElement = screen.getByText(/DID.TITLE/i);
    expect(linkElement).toBeInTheDocument();
});
