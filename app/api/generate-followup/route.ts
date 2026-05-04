import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { originalMessage, tone } = await request.json();

    if (!originalMessage) {
      return NextResponse.json(
        { error: 'Missing originalMessage' },
        { status: 400 }
      );
    }

    const followUp = generateFollowUp(originalMessage, tone);

    return NextResponse.json({
      success: true,
      followUp,
    });
  } catch (error) {
    console.error('Error generating follow-up:', error);
    return NextResponse.json(
      { error: 'Failed to generate follow-up' },
      { status: 500 }
    );
  }
}

function generateFollowUp(originalMessage: string, tone: string = 'professional'): string {
  const templates = {
    professional: [
      `Hi,

I wanted to follow up on my previous message regarding the project we discussed. I'm still very interested and confident in my ability to deliver excellent results.

If you have any questions or would like to discuss further, I'm available anytime. Looking forward to hearing from you.

Best regards`,

      `Hello,

I hope you've had a chance to review my previous proposal. I'm excited about the opportunity to work on this project and would love to discuss it further.

Please let me know your thoughts, and I'm happy to accommodate your timeline and requirements.

Best regards`,
    ],
    friendly: [
      `Hey!

Just checking in! I'm really excited about your project and think I could be a great fit. Let me know if you'd like to chat more or if you have any questions.

Cheers!`,

      `Hi there!

Wanted to touch base and see if you're interested in moving forward. I'm ready to start whenever you are and would love to help make this project a success!

Talk soon!`,
    ],
    urgent: [
      `Hi,

I wanted to re-emphasize my interest in this project. I have limited availability and wanted to make sure you knew I'm genuinely interested and ready to start immediately.

Available to discuss anytime. Looking forward to your response.

Best regards`,

      `Hello,

Following up on my proposal - I'm still very interested and available to start right away. This project is exactly the type of work I excel at.

Would love to move forward. Please let me know!

Best regards`,
    ],
  };

  const selectedTemplates = templates[tone as keyof typeof templates] || templates.professional;
  return selectedTemplates[Math.floor(Math.random() * selectedTemplates.length)];
}
