import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface Investment {
    id: number;
    fund: string;
    amount: number;
}

// Temp array to store investments as I've not set up a dB
const investments: Investment[] = [];

export async function GET(request: NextRequest) {
    // Return the list of investments
    return NextResponse.json(investments);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { fund, amount } = body;

    if (
        !fund ||
        typeof fund !== 'string' ||
        !amount ||
        typeof amount !== 'number'
    ) {
        return NextResponse.json(
            { error: 'Invalid request body. Fund and amount are required.' },
            { status: 400 }
        );
    }

    const newInvestment: Investment = {
        id: investments.length + 1,
        fund,
        amount,
    };

    investments.push(newInvestment);

    // Return the newly added investment
    return NextResponse.json(newInvestment, { status: 201 });
}
