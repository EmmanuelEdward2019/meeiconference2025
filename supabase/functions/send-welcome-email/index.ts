import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { encode as base64Encode } from "https://deno.land/std@0.190.0/encoding/base64.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WelcomeEmailRequest {
  name: string;
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: WelcomeEmailRequest = await req.json();

    console.log(`Sending welcome email to: ${email}`);

    // Load logo as base64 to attach as inline CID image
    let logoBase64: string | null = null;
    try {
      const logoBytes = await Deno.readFile(new URL("./logo.png", import.meta.url));
      logoBase64 = base64Encode(logoBytes.buffer);
    } catch (e) {
      console.error("Failed to load logo:", e);
    }

    // Email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Türkiye–Nigeria Business & Investment Summit 2025</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif; background-color: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <!-- Header with Logo -->
                <tr>
                  <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); border-radius: 8px 8px 0 0;">
                    <img src="cid:logo-image" alt="MEEI Conference Logo" style="max-width: 180px; height: auto; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; line-height: 1.3;">
                      Türkiye–Nigeria<br>Business & Investment Summit 2025
                    </h1>
                  </td>
                </tr>
                
                <!-- Main Content -->
                <tr>
                  <td style="padding: 40px;">
                    <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                      Dear ${name},
                    </p>
                    
                    <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                      Thank you for registering for the <strong>Türkiye–Nigeria Business & Investment Summit 2025</strong>. We are thrilled to have you join us for this prestigious event taking place from <strong>November 16-20, 2025</strong>, with the main event on <strong>November 19, 2025</strong>.
                    </p>
                    
                    <p style="margin: 0 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                      This summit brings together business leaders, investors, and policymakers from Türkiye and Nigeria to explore collaboration opportunities in trade, investment, and economic development.
                    </p>

                    <div style="background-color: #f8f9fa; border-left: 4px solid #e94560; padding: 20px; margin: 30px 0; border-radius: 4px;">
                      <h2 style="margin: 0 0 15px; color: #1a1a1a; font-size: 18px; font-weight: 600;">
                        What's Next?
                      </h2>
                      <ul style="margin: 0; padding-left: 20px; color: #555555; font-size: 15px; line-height: 1.8;">
                        <li style="margin-bottom: 8px;">You will receive further details about the event schedule shortly</li>
                        <li style="margin-bottom: 8px;">Our team will contact you within 24-48 hours regarding next steps</li>
                        <li style="margin-bottom: 8px;">Please keep this confirmation email for your records</li>
                      </ul>
                    </div>

                    <p style="margin: 30px 0 20px; color: #333333; font-size: 16px; line-height: 1.6;">
                      If you have any questions or need assistance, please don't hesitate to contact our team:
                    </p>

                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                      <tr>
                        <td style="padding: 15px; background-color: #f8f9fa; border-radius: 4px;">
                          <p style="margin: 0 0 10px; color: #1a1a1a; font-size: 15px; font-weight: 600;">
                            Türkiye:
                          </p>
                          <p style="margin: 0; color: #555555; font-size: 15px;">
                            <a href="tel:+447555470238" style="color: #e94560; text-decoration: none;">+44 7555 470238</a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="height: 10px;"></td>
                      </tr>
                      <tr>
                        <td style="padding: 15px; background-color: #f8f9fa; border-radius: 4px;">
                          <p style="margin: 0 0 10px; color: #1a1a1a; font-size: 15px; font-weight: 600;">
                            Nigeria:
                          </p>
                          <p style="margin: 0; color: #555555; font-size: 15px;">
                            <a href="tel:+905319657443" style="color: #e94560; text-decoration: none;">+90 531 965 7443</a>
                          </p>
                        </td>
                      </tr>
                    </table>

                    <p style="margin: 30px 0 0; color: #333333; font-size: 16px; line-height: 1.6;">
                      We look forward to welcoming you to this landmark event!
                    </p>
                    
                    <p style="margin: 20px 0 0; color: #333333; font-size: 16px; line-height: 1.6;">
                      Best regards,<br>
                      <strong>The Summit Organizing Team</strong>
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 30px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
                    <p style="margin: 0 0 10px; color: #888888; font-size: 14px; line-height: 1.5;">
                      Türkiye–Nigeria Business & Investment Summit 2025
                    </p>
                    <p style="margin: 0; color: #888888; font-size: 14px; line-height: 1.5;">
                      November 16-20, 2025 | Istanbul, Türkiye
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Send email via Resend
    // Send email via Resend with CID inline image
    const emailResponse = await resend.emails.send({
      from: "Türkiye–Nigeria Summit <info@techfieldsdigital.com.ng>",
      to: [email],
      subject: "Welcome to Türkiye–Nigeria Business & Investment Summit 2025",
      html: emailHtml,
      attachments: logoBase64
        ? [
            {
              filename: "logo.png",
              content: logoBase64,
              contentId: "logo-image",
            },
          ]
        : undefined,
    } as any);

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Welcome email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
