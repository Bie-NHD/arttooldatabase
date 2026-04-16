const PLATFORMS = [
  "Windows",
  "macOS",
  "Linux",
  "Android",
  "iOS",
  "Browser"

] as const;
const LICENSES = [
  "Free",
  "Freemium",
  "Subscription",
  "Lifetime"
] as const;

export { PLATFORMS, LICENSES };