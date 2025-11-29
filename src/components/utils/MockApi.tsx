// src/utils/mockApi.ts
// Mock API simulating server response. Use for demo (no backend required).
// Later: replace sendMessage implementation with fetch('/api/chat') to call your backend.

// src/utils/mockApi.ts
import { COMPANY_BIO } from "../data/KnowledgeBase";
import type { ChatMessage } from "../types/Chat";

// keyword helper
const match = (text: string, keys: string[]) =>
  keys.some((k) => text.includes(k));

export const mockApi = {
  sendMessage: async (text: string): Promise<ChatMessage> => {
    await new Promise((r) => setTimeout(r, 400 + Math.random() * 500));

    const lower = text.toLowerCase().trim();
    let reply = "";

    /* -----------------------------------------
       1. GREETINGS
    ------------------------------------------ */
    if (match(lower, ["hi", "hello", "hey", "namaste"])) {
      reply = `Hello 👋  
${COMPANY_BIO}  
How can I help you today?`;
    }

    /* -----------------------------------------
       2. CLIENT GIVES REQUIREMENT (any industry)
    ------------------------------------------ */
    else if (
      match(lower, [
        "shop",
        "company",
        "studio",
        "agency",
        "restaurant",
        "store",
        "clinic",
        "hospital",
        "business",
        "startup",
        "brand",
        "hotel",
        "institute",
        "coaching",
        "school",
        "university",
        "salon",
        "gym",
        "real estate",
      ])
    ) {
      reply = `
Thank you for sharing your business details 👍  
Our team will contact you shortly.

Please share your **name & phone number** for quick follow-up.`;
    }

    /* -----------------------------------------
       3. WEBSITE DEVELOPMENT
    ------------------------------------------ */
    else if (
      match(lower, [
        "website",
        "web development",
        "site",
        "portfolio",
        "landing page",
        "company website",
        "business website",
        "ecommerce",
        "e-commerce",
        "shopify",
        "wordpress",
        "react website",
        "next js",
      ])
    ) {
      reply = `
Sure 👍  
Here are the website pricing options:

1️⃣ Basic Website – ₹3,999 – ₹5,999  
2️⃣ Business Website – ₹6,999 – ₹14,999 
3️⃣ Advanced/React/Next.js – ₹15,999+++

Pricing depends on your tech stack & features.  
Our team will contact you shortly.`;
    }

    /* -----------------------------------------
       4. APP DEVELOPMENT
    ------------------------------------------ */
    else if (
      match(lower, [
        "app",
        "mobile app",
        "android",
        "ios",
        "apk",
        "flutter",
        "react native",
        "play store",
      ])
    ) {
      reply = `
App development pricing starts at **₹19,999+**  
The final cost depends on screens, features & backend.

Our team will contact you shortly.`;
    }

    /* -----------------------------------------
       5. SOFTWARE / CRM / ERP
    ------------------------------------------ */
    else if (
      match(lower, [
        "software",
        "crm",
        "erp",
        "management system",
        "billing",
        "inventory",
        "school software",
      ])
    ) {
      reply = `
CRM/Software development starts from ₹25,000+ depending on modules.  
Our team will contact you shortly.`;
    }

    /* -----------------------------------------
       6. DIGITAL MARKETING / SMM / ADS
    ------------------------------------------ */
    else if (
      match(lower, [
        "seo",
        "digital marketing",
        "smm",
        "marketing",
        "meta ads",
        "facebook ads",
        "instagram ads",
        "lead generation",
        "ads",
        "promotion",
      ])
    ) {
      reply = `
Here are the marketing plan details:

🔸 SEO: ₹6,999-₹19,999/month  
🔸 Social Media Management: ₹5,999–₹19,999/month  
🔸 Meta Ads Setup: ₹4,999–₹19,999/month  

Our team will contact you shortly.`;
    }

    /* -----------------------------------------
       7. VIDEO EDITING / GRAPHICS
    ------------------------------------------ */
    else if (
      match(lower, [
        "video",
        "editing",
        "reel",
        "motion",
        "promo",
        "graphic",
        "logo",
        "branding",
        "ui ux",
        "poster",
      ])
    ) {
      reply = `
Our video editing services start at just ₹299.  
Basic: ₹299–₹499 · Standard: ₹599–₹799 · Premium: ₹899–₹1,599.  
Perfect for reels, promos, and high-quality creative edits.
 

Our team will reach out soon.`;
    }

    /* -----------------------------------------
       8. HOSTING / VPS / SERVER / DOMAIN
    ------------------------------------------ */
    else if (
      match(lower, [
        "hosting",
        "domain",
        "server",
        "vps",
        "cloud",
        "cpanel",
        "shared hosting",
        "dedicated",
      ])
    ) {
      reply = `
Hosting details:

🔹 Shared Hosting → ₹1,900 – ₹3,500/year  
🔹 VPS (KVM1 → KVM4) based on traffic & resources  
🔹 Domain may be FREE with hosting depending on plan

Our team will contact you shortly.`;
    }

    /* -----------------------------------------
       9. GENERAL PRICING QUESTIONS
    ------------------------------------------ */
    else if (
      match(lower, [
        "kitna",
        "price",
        "cost",
        "budget",
        "estimate",
        "charges",
      ])
    ) {
      reply = `
Pricing depends on tech, pages & required features.  
Please specify your exact service for an accurate estimate.

Our team will contact you shortly.`;
    }

    /* -----------------------------------------
       10. CONTACT / NEED HELP
    ------------------------------------------ */
    else if (
      match(lower, ["call", "contact", "reach", "talk", "help", "support"])
    ) {
      reply = `
Sure!  
Please share your **name & phone number**.  
Our team will contact you shortly.`;
    }

    /* -----------------------------------------
       11. FALLBACK — but NO SERVICES LIST
    ------------------------------------------ */
    else {
      reply = `
Sure, I can help.  
Please share your requirement in detail.`;
    }

    /* -----------------------------------------
       Final Response
    ------------------------------------------ */
    return {
      id: `b_${Date.now()}`,
      sender: "bot",
      text: reply,
      time: Date.now(),
    };
  },
};


/*
HOW TO INTEGRATE REAL BACKEND LATER:
Replace sendMessage implementation with something like:

export const sendMessage = async (text: string) => {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: text })
  });
  const json = await res.json(); // expect { reply: string }
  return { id: `b_${Date.now()}`, sender: 'bot', text: json.reply, time: Date.now() };
}
*/
