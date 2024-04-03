'use client';

import { useInvestmentContext } from '@/context/investment-context';

const InvestAmount = () => {
    const { amount, setAmount } = useInvestmentContext();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        console.log(`Investing ${amount}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter an amount:
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            </label>
            <button type="submit">Invest</button>
            <p>{`Previously invested amount was ${amount}`}</p>
        </form>
    );
};

export default InvestAmount;
