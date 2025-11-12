import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const getOrCreateSessionId = (): string => {
  const key = "visitor_session_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
};

const fetchGeo = async (): Promise<{ country: string | null; city: string | null }> => {
  try {
    const res = await fetch("https://ipapi.co/json/");
    if (!res.ok) return { country: null, city: null };
    const data = await res.json();
    return {
      country: data?.country_name || null,
      city: data?.city || null
    };
  } catch {
    return { country: null, city: null };
  }
};

const parseUserAgent = () => {
  const ua = navigator.userAgent;
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
  return {
    device_type: isMobile ? "mobile" : "desktop",
    browser,
    os
  };
};

const VisitorTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const track = async () => {
      try {
        // Keep generating a stable client session id, sent via header if needed later
        getOrCreateSessionId();
        await supabase.functions.invoke("track-visit", {
          body: {
            page_path: location.pathname,
            referrer: document.referrer || null,
            user_agent: navigator.userAgent,
          },
        });
      } catch {
        // Swallow errors to avoid impacting UX
      }
    };
    track();
  }, [location.pathname]);

  return null;
};

export default VisitorTracker;


