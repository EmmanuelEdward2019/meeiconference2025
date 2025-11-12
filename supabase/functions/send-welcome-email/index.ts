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

    // Read and encode logo as base64
    let logoBase64 = "";
    try {
      const logoBytes = await Deno.readFile("./logo.png");
      logoBase64 = base64Encode(logoBytes);
    } catch (error) {
      console.warn("Could not read logo file:", error);
    }

    // Email HTML template with branded design
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                
                <!-- Logo Header -->
                <tr>
                  <td align="center" style="padding: 40px 40px 30px 40px; background-color: #000000;">
                    ${logoBase64 ? `<img src="data:image/png;base64,${logoBase64}" alt="MEEI Conference Logo" style="max-width: 200px; height: auto; display: block;" />` : ''}
                  </td>
                </tr>

                <!-- Main Content -->
                <tr>
                  <td style="padding: 40px 40px 30px 40px;">
                    <h1 style="margin: 0 0 20px 0; font-size: 28px; font-weight: 700; color: #1a1a1a; line-height: 1.3;">
                      Welcome to the Summit
                    </h1>
                    
                    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                      Dear ${name},
                    </p>

                    <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                      Thank you for registering for the <strong style="color: #2d5016;">Türkiye–Nigeria Business & Investment Summit 2025</strong>. 
                      We are thrilled to have you join us for this prestigious event taking place from 
                      <strong style="color: #8b4513;">November 16-20, 2025</strong>, with the main event on 
                      <strong style="color: #8b4513;">November 19, 2025</strong>.
                    </p>

                    <p style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                      This summit brings together business leaders, investors, and policymakers from Türkiye and Nigeria 
                      to explore collaboration opportunities in trade, investment, and economic development.
                    </p>

                    <!-- What's Next Section -->
                    <div style="background-color: #f8f9fa; border-left: 4px solid #4a7c2a; padding: 20px; margin: 30px 0; border-radius: 4px;">
                      <h2 style="margin: 0 0 15px 0; font-size: 20px; font-weight: 600; color: #2d5016;">
                        What's Next?
                      </h2>
                      <ul style="margin: 0; padding-left: 20px; color: #333333; font-size: 15px; line-height: 1.8;">
                        <li style="margin-bottom: 8px;">You will receive further details about the event schedule shortly</li>
                        <li style="margin-bottom: 8px;">Our team will contact you within 24-48 hours regarding next steps</li>
                        <li>Please keep this confirmation email for your records</li>
                      </ul>
                    </div>

                    <!-- Contact Information -->
                    <div style="margin: 30px 0;">
                      <p style="margin: 0 0 15px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                        If you have any questions or need assistance, please don't hesitate to contact our team:
                      </p>
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="width: 100%;">
                        <tr>
                          <td style="padding: 8px 0; font-size: 15px; color: #333333;">
                            <strong style="color: #2d5016;">Türkiye:</strong>
                          </td>
                          <td style="padding: 8px 0; font-size: 15px; color: #333333; text-align: right;">
                            +44 7555 470238
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; font-size: 15px; color: #333333;">
                            <strong style="color: #2d5016;">Nigeria:</strong>
                          </td>
                          <td style="padding: 8px 0; font-size: 15px; color: #333333; text-align: right;">
                            +90 531 965 7443
                          </td>
                        </tr>
                      </table>
                    </div>

                    <p style="margin: 30px 0 20px 0; font-size: 16px; line-height: 1.6; color: #333333;">
                      We look forward to welcoming you to this landmark event!
                    </p>

                    <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #333333;">
                      Best regards,<br/>
                      <strong style="color: #2d5016;">The Summit Organizing Team</strong>
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding: 30px 40px; background-color: #000000; border-radius: 0 0 8px 8px;">
                    <div style="text-align: center; color: #ffffff; font-size: 14px; line-height: 1.6;">
                      <p style="margin: 0 0 8px 0; font-weight: 600;">
                        Türkiye–Nigeria Business & Investment Summit 2025
                      </p>
                      <p style="margin: 0; color: #cccccc;">
                        November 16-20, 2025 | Istanbul, Türkiye
                      </p>
                    </div>
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
    const emailResponse = await resend.emails.send({
      from: "Türkiye–Nigeria Summit <info@techfieldsdigital.com.ng>",
      to: [email],
      subject: "Welcome to Türkiye–Nigeria Business & Investment Summit 2025",
      html: emailHtml,
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
      },
    );
  } catch (error: any) {
    console.error("Error in send-welcome-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      },
    );
  }
};

serve(handler);
