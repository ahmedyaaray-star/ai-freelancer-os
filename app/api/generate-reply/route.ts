import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { clientMessage, serviceType } = await request.json();

    if (!clientMessage || !serviceType) {
      return NextResponse.json(
        { error: 'Missing clientMessage or serviceType' },
        { status: 400 }
      );
    }

    // Mock AI response - replace with OpenAI API when key is available
    // For now, generate a professional reply template
    const mockReply = generateProfessionalReply(clientMessage, serviceType);

    return NextResponse.json({
      success: true,
      reply: mockReply,
    });
  } catch (error) {
    console.error('Error generating reply:', error);
    return NextResponse.json(
      { error: 'Failed to generate reply' },
      { status: 500 }
    );
  }
}

function generateProfessionalReply(clientMessage: string, serviceType: string): string {
  const greeting = 'Hello,\n\n';

  const bodyTemplates = [
    `Thank you for reaching out! I appreciate your interest in my ${serviceType} services. I'd be happy to help you with your project.\n\nI noticed your message about "${clientMessage.substring(0, 50)}..." - I have extensive experience with similar projects and I'm confident I can deliver exactly what you're looking for.\n\nCould you share a bit more about your timeline and budget? I'd love to discuss the details and provide you with a custom proposal.\n\nLooking forward to working with you!`,

    `Hi there!\n\nThanks for reaching out. I specialize in ${serviceType} and I'm very interested in your project.\n\nYour requirements align perfectly with my expertise. I can definitely help you achieve your goals.\n\nWhen would be a good time to discuss the project details? I'm flexible and can accommodate your schedule.\n\nBest regards`,

    `Hello!\n\nI appreciate you thinking of me for this project. With my background in ${serviceType}, I'm confident I can deliver outstanding results.\n\nI'd love to learn more about what you're looking to accomplish. Once I understand your needs better, I can provide you with a detailed proposal and timeline.\n\nLet's chat soon!`,
  ];

  const closing = '\n\nBest regards,\n[Your Name]';

  // Pick a random template
  const template = bodyTemplates[Math.floor(Math.random() * bodyTemplates.length)];

  return greeting + template + closing;
}
