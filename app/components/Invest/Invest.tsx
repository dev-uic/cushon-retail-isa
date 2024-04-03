'use client';

import { useEffect, useState } from 'react';
import { useInvestmentContext } from '@/context/investment-context';

const Invest = () => {
    const { fund, setFund } = useInvestmentContext();
    const [funds, setFunds] = useState<string[]>([]);

    useEffect(() => {
        const fetchFunds = async () => {
            const data = ['Fund A', 'Fund B', 'Fund C'];
            setFunds(data);
        };

        fetchFunds();
    }, []);

    return (
        <select value={fund} onChange={(e) => setFund(e.target.value)}>
            {funds.map((fund) => (
                <option key={fund} value={fund}>
                    {fund}
                </option>
            ))}
        </select>
    );
};

export default Invest;
