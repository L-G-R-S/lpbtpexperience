import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Simulating HubSpot integration
        console.log('Form data received:', data);

        // In a real scenario, we would send this data to HubSpot API here

        return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    } catch {
        return NextResponse.json({ success: false, message: 'Error submitting form' }, { status: 500 });
    }
}
