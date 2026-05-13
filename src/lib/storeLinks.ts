export const APP_STORE_URL = "https://apps.apple.com/us/app/fitness-court/id563421203";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.nationalfitnesscampaign.FitnessCourtLive";

export function pickStoreUrl(userAgent: string): string {
  if (/iPad|iPhone|iPod/i.test(userAgent)) return APP_STORE_URL;
  if (/Android/i.test(userAgent)) return GOOGLE_PLAY_URL;
  return APP_STORE_URL;
}
