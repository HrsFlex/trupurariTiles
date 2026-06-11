import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, phone, message } = data;

    if (!name || !phone || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const lead = {
      id: Date.now(),
      date: new Date().toISOString(),
      name,
      phone,
      message
    };

    // Define the path to the local file
    const filePath = path.join(process.cwd(), 'leads.json');
    
    let leads = [];
    
    // Check if the file exists and read it
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      if (fileData) {
        leads = JSON.parse(fileData);
      }
    }

    // Append new lead and write back to file
    leads.push(lead);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error('Error saving lead:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
