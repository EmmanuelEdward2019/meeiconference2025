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

    // Email HTML template (unchanged content)
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">

        <h1 style="text-align: center; color: #1a1a1a;">
          Türkiye–Nigeria Business & Investment Summit 2025
        </h1>

        <p>Dear ${name},</p>

        <p>
          Thank you for registering for the <strong>Türkiye–Nigeria Business & Investment Summit 2025</strong>.
          We are thrilled to have you join us for this prestigious event taking place from
          <strong>November 16-20, 2025</strong>, with the main event on
          <strong>November 19, 2025</strong>.
        </p>

        <p>
          This summit brings together business leaders, investors, and policymakers from Türkiye and Nigeria
          to explore collaboration opportunities in trade, investment, and economic development.
        </p>

        <h2>What's Next?</h2>
        <ul>
          <li>You will receive further details about the event schedule shortly</li>
          <li>Our team will contact you within 24-48 hours regarding next steps</li>
          <li>Please keep this confirmation email for your records</li>
        </ul>

        <p>
          If you have any questions or need assistance, please don't hesitate to contact our team:
        </p>

        <table style="margin-top: 10px;">
          <tr>
            <td><strong>Türkiye:</strong></td>
            <td style="padding-left: 10px;">+44 7555 470238</td>
          </tr>
          <tr>
            <td><strong>Nigeria:</strong></td>
            <td style="padding-left: 10px;">+90 531 965 7443</td>
          </tr>
        </table>

        <p>
          We look forward to welcoming you to this landmark event!
        </p>

        <p>
          Best regards,<br/>
          <strong>The Summit Organizing Team</strong>
        </p>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />

        <div style="text-align: center; color: #666; font-size: 14px;">
          <p><strong>Türkiye–Nigeria Business & Investment Summit 2025</strong></p>
          <p>November 16-20, 2025 | Istanbul, Türkiye</p>
        </div>
      </div>
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
