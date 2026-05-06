import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).optional(),
  firstName: z.string().min(2).optional(),
  lastName: z.string().min(2).optional(),
  email: z.string().email(),
  subject: z.string().min(5).optional(),
  message: z.string().min(20).optional(),
  motivation: z.string().min(50).optional(),
  type: z.enum(["contact", "network"]).optional(),
  company: z.string().optional(),
  phone: z.string().optional(),
  specialty: z.string().optional(),
  experience: z.string().optional(),
  location: z.string().optional(),
  availability: z.string().optional(),
  tools: z.string().optional(),
  linkedin: z.string().optional(),
  portfolio: z.string().optional(),
  consent: z.boolean(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Log the submission (replace with your email service: Resend, SendGrid, Nodemailer, etc.)
    console.log("[Contact Form Submission]", {
      timestamp: new Date().toISOString(),
      type: data.type || "contact",
      email: data.email,
      name: data.name || `${data.firstName} ${data.lastName}`,
    });

    // TODO: Integrate with an email service
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@ksorindustrie.com',
    //   to: 'contact@ksorindustrie.com',
    //   subject: `Nouveau message de ${data.name || data.firstName} — ${data.subject || 'Réseau'}`,
    //   text: JSON.stringify(data, null, 2),
    // });

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
