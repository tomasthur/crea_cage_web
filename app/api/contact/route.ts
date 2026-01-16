import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validácia
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Všetky polia sú povinné' },
        { status: 400 }
      );
    }

    // Odoslanie cez Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: '03182857-e158-408c-b565-c25b4aaba8c6',
        name: name,
        email: email,
        message: message,
        subject: `Nová správa z Crea Cage webu od ${name}`,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Web3Forms HTTP error:', response.status, errorText);
      throw new Error(`HTTP error ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      console.error('Neočakávaná odpoveď (nie JSON):', text);
      throw new Error('API vrátilo neplatný formát');
    }

    const data = await response.json();

    if (data.success) {
      console.log('✅ Email úspešne odoslaný na creacage@gmail.com');
      console.log(`Od: ${name} (${email})`);
      
      return NextResponse.json(
        { success: true, message: 'Správa bola odoslaná' },
        { status: 200 }
      );
    } else {
      console.error('Web3Forms error:', data);
      throw new Error(data.message || 'Neznáma chyba');
    }
  } catch (error) {
    console.error('Chyba:', error);
    return NextResponse.json(
      { error: 'Nastala chyba pri odosielaní správy' },
      { status: 500 }
    );
  }
}
