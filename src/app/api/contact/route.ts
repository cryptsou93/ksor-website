import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email(),
  subject: z.string().min(5).optional(),
  message: z.string().min(20).optional(),
  type: z.enum(["contact", "network"]).optional(),
});

type FormData = z.infer<typeof contactSchema>;

function buildContactHtml(data: FormData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f8f8f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8f8;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#0f1923;padding:32px 40px;">
            <p style="margin:0;color:#e65c1a;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">KSOR Industrie</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:800;">Nouveau message reçu</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0 0 4px;color:#999999;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Nom</p>
                  <p style="margin:0;color:#333333;font-size:15px;font-weight:600;">${data.name ?? "—"}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0 0 4px;color:#999999;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
                  <p style="margin:0;"><a href="mailto:${data.email}" style="color:#e65c1a;font-size:15px;">${data.email}</a></p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0 0 4px;color:#999999;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Objet</p>
                  <p style="margin:0;color:#333333;font-size:15px;">${data.subject ?? "—"}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;">
                  <p style="margin:0 0 8px;color:#999999;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message</p>
                  <p style="margin:0;color:#555555;font-size:15px;line-height:1.7;white-space:pre-wrap;">${data.message ?? "—"}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8f8f8;padding:20px 40px;border-top:1px solid #eeeeee;">
            <p style="margin:0;color:#999999;font-size:12px;">Reçu le ${new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })} — ksorindustrie.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildNetworkHtml(data: FormData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f8f8f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f8f8;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#0f1923;padding:32px 40px;">
            <p style="margin:0;color:#e65c1a;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">KSOR Industrie — Réseau</p>
            <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;font-weight:800;">Nouvelle candidature réseau</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0 0 4px;color:#999999;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Nom</p>
                  <p style="margin:0;color:#333333;font-size:15px;font-weight:600;">${data.name ?? "—"}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0 0 4px;color:#999999;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Email</p>
                  <p style="margin:0;"><a href="mailto:${data.email}" style="color:#e65c1a;font-size:15px;">${data.email}</a></p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                  <p style="margin:0 0 4px;color:#999999;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Objet</p>
                  <p style="margin:0;color:#333333;font-size:15px;">${data.subject ?? "—"}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;">
                  <p style="margin:0 0 8px;color:#999999;font-size:11px;text-transform:uppercase;letter-spacing:1px;">Message / Présentation</p>
                  <p style="margin:0;color:#555555;font-size:15px;line-height:1.7;white-space:pre-wrap;">${data.message ?? "—"}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8f8f8;padding:20px 40px;border-top:1px solid #eeeeee;">
            <p style="margin:0;color:#999999;font-size:12px;">Reçu le ${new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })} — ksorindustrie.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);
    const isNetwork = data.type === "network";

    const subject = isNetwork
      ? `Nouvelle candidature réseau - ${data.name ?? data.email}`
      : `Nouveau message - ${data.subject ?? "(sans objet)"}`;

    const html = isNetwork ? buildNetworkHtml(data) : buildContactHtml(data);

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "contact@ksorindustrie.com",
      to: "contact@ksorindustrie.com",
      replyTo: data.email,
      subject,
      html,
    });

    if (error) {
      console.log('Resend error:', error);
      console.error("[Resend error]", error);
      return NextResponse.json(
        { success: false, message: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

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
    console.error("[Contact route error]", error);
    return NextResponse.json(
      { success: false, message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
