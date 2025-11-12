import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.43.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { page_path, referrer, user_agent } = await req.json();

    // Get client IP from headers set by edge/CDN/proxy
    const ip =
      req.headers.get("CF-Connecting-IP") ||
      req.headers.get("X-Forwarded-For")?.split(",")[0].trim() ||
      req.headers.get("X-Real-IP") ||
      null;

    // Attempt to get geo from Cloudflare headers (if present)
    const cfCountry = req.headers.get("CF-IPCountry");
    const cfCity = req.headers.get("CF-IPCity");

    // Lightweight UA parsing
    const ua = String(user_agent || "");
    const isMobile = /Mobi|Android/i.test(ua);
    let browser: string | null = null;
    if (ua.includes("Chrome")) browser = "Chrome";
    else if (ua.includes("Safari")) browser = "Safari";
    else if (ua.includes("Firefox")) browser = "Firefox";
    else if (ua.includes("Edg")) browser = "Edge";
    let os: string | null = null;
    if (/Windows/i.test(ua)) os = "Windows";
    else if (/Mac OS X/i.test(ua)) os = "macOS";
    else if (/Android/i.test(ua)) os = "Android";
    else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";

    // Anonymous session id via header if provided by client, else generate
    const sessionId = crypto.randomUUID();

    const { error } = await supabase.from("visitor_analytics").insert([
      {
        session_id: sessionId,
        page_path,
        referrer: referrer || null,
        user_agent: ua || null,
        ip_address: ip,
        country: cfCountry || null,
        city: cfCity || null,
        device_type: isMobile ? "mobile" : "desktop",
        browser,
        os,
      },
    ]);
    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
      status: 500,
    });
  }
};

serve(handler);


