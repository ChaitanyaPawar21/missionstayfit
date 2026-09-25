/**
 * Mission StayFit - Device Detection Utility
 * 
 * Determines whether the user is browsing on a Mobile/Tablet device vs. Desktop/Laptop.
 * Used to intelligently route booking requests via WhatsApp (Mobile) or Email Service (Desktop).
 */

export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera || '';

  // 1. Mobile & tablet user agent string patterns
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|FxiOS/i;
  const isMobileUA = mobileRegex.test(userAgent);

  // 2. iPad running iOS 13+ presents as Macintosh in userAgent, but has multi-touch support
  const isIPadMac = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;

  // 3. Responsive screen width + touch capability check (for devices/viewports <= 768px with touch)
  const isSmallTouchScreen = window.innerWidth <= 768 && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  return Boolean(isMobileUA || isIPadMac || isSmallTouchScreen);
};
