'use client';

import { useState, FormEvent } from 'react';
import Layout from '@/components/Layout';
// import Welcome from '@/components/Welcome';
// import {
//     Button,
//     Label,
//     ListBox,
//     ListBoxItem,
//     Popover,
//     Select,
//     SelectValue,
// } from 'react-aria-components'; // I would spend more time on Accessibility
import { useInvestmentContext } from '@/context/investment-context';

export default function RetailISA() {
    const { fund, setFund, amount, setAmount } = useInvestmentContext();
    const [selectedFund, setSelectedFund] = useState<string>(
        'Cushon Equities Fund'
    );

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const numericAmount = parseFloat(amount.toString());

        if (!isNaN(numericAmount) && numericAmount > 0) {
            const response = await fetch('/api/investment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fund: selectedFund,
                    amount: numericAmount,
                }),
            });

            if (response.ok) {
                const updatedInvestments = await fetch('/api/investment');
                const data = await updatedInvestments.json();

                // Update the context with the new data
                setFund(data);
            }
        } else {
            console.log('Invalid amount');
        }
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputAmount = parseFloat(event.target.value);
        if (!isNaN(inputAmount)) {
            setAmount(inputAmount);
        } else {
            setAmount(0); // Set the amount to 0 if the input is not a valid number
        }
    };

    const WelcomeProps = {
        heading: 'Choose your product',
        description:
            'We have a solution to suit all your saving goals. Our app brings everything together into one view, with powerful tools to give you control, even on the go. Jump in and set up an account right away, or explore the options below.',
        cta: false,
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Layout>
                {/* <Welcome {...WelcomeProps} /> */}
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="fund"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Select Fund:
                            </label>
                            <select
                                id="fund"
                                value={selectedFund}
                                onChange={(e) =>
                                    setSelectedFund(e.target.value)
                                }
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="Qwerty Equities Fund">
                                    Qwerty Equities Fund
                                </option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="amount"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Investment Amount:
                            </label>
                            <input
                                type="number"
                                id="amount"
                                value={amount.toString()}
                                onChange={handleAmountChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full mb-8 p-4 shadow-md sm:text-sm border-gray-300 rounded-md"
                                required
                            />

                            <button
                                type="submit"
                                className="bg-cushon-pink text-white p-3 rounded-md"
                            >
                                Invest
                            </button>
                        </div>
                    </form>
                </div>
            </Layout>
        </main>
    );
}
