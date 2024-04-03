// @react-client-component
import { ReactNode, createContext, useContext, useState } from 'react';

interface InvestmentContextProps {
    fund: string;
    setFund: React.Dispatch<React.SetStateAction<string>>;
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
}

interface InvestmentProviderProps {
    children: ReactNode;
}

export const InvestmentContext = createContext<
    InvestmentContextProps | undefined
>(undefined);

export const useInvestmentContext = () => {
    const context = useContext(InvestmentContext);
    if (!context) {
        throw new Error('No data found');
    }
    return context;
};

export const InvestmentProvider = ({ children }: InvestmentProviderProps) => {
    const [fund, setFund] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);

    return (
        <InvestmentContext.Provider
            value={{ fund, setFund, amount, setAmount }}
        >
            {children}
        </InvestmentContext.Provider>
    );
};
