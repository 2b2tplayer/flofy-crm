const CONFIG = {
  GEMINI_API_KEY: "your_gemini_api_key_here", // Replace with your actual Gemini API key
  GEMINI_API_URL:
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
  MAX_RESPONSE_LENGTH: 200,
  MAX_SUMMARY_LENGTH: 2000,
  COMPANY_NAME: "Flofy",
};

// Global variable for direct access
const GEMINI_API_KEY = CONFIG.GEMINI_API_KEY;

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
