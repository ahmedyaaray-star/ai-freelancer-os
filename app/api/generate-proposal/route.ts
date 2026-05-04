import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { projectDescription, budget, skills } = await request.json();

    if (!projectDescription || !budget || !skills) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const proposal = generateProposal(projectDescription, budget, skills);

    return NextResponse.json({
      success: true,
      proposal,
    });
  } catch (error) {
    console.error('Error generating proposal:', error);
    return NextResponse.json(
      { error: 'Failed to generate proposal' },
      { status: 500 }
    );
  }
}

function generateProposal(projectDescription: string, budget: string, skills: string): string {
  const templates = [
    `Hi there,

Thank you for posting this project. I'm very interested in working with you and believe I'm the perfect fit for this role.

About Me:
I specialize in ${skills} and have successfully delivered similar projects with exceptional results. My approach combines technical excellence with clear communication to ensure your project is completed on time and exceeds expectations.

Project Understanding:
${projectDescription}

Why I'm Your Best Choice:
✓ Proven expertise in ${skills}
✓ Portfolio of high-quality work
✓ Fast turnaround time
✓ Excellent communication
✓ 100% satisfaction guarantee

Budget:
${budget} (competitive and flexible)

Timeline:
I can start immediately and deliver quality results within your timeframe.

I'm excited about this opportunity and confident we can create something amazing together. Let's discuss your requirements in detail.

Best regards`,

    `Hello,

I'm thrilled to bid on your project! After reviewing your requirements, I'm confident I can deliver exactly what you need.

My Expertise:
With ${skills}, I have extensive experience in delivering projects like yours. I understand the requirements and can deliver high-quality work efficiently.

Project Overview:
"${projectDescription}"

What I Offer:
• Professional quality work
• On-time delivery
• Clear communication
• Unlimited revisions
• ${budget}

My Process:
1. Understand your needs completely
2. Deliver a solid scope and timeline
3. Execute with precision
4. Provide ongoing support

I'm ready to start immediately and would love to discuss how I can contribute to your success.

Looking forward to working with you!

Best regards`,

    `Hi,

Thank you for sharing this opportunity. I'm a skilled professional in ${skills} and would love to help you with this project.

Project Summary:
${projectDescription}

Why Hire Me:
✓ Specialized knowledge in ${skills}
✓ Proven track record of success
✓ Dedicated project management
✓ Quality-focused approach
✓ Budget: ${budget}

I have completed numerous similar projects and consistently deliver results that exceed client expectations. My commitment is to make your project a success.

I'm available to start immediately and would be happy to discuss your project in more detail.

Let's create something great together!

Best regards`,
  ];

  return templates[Math.floor(Math.random() * templates.length)];
}
