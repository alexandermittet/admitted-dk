/**
 * Centralized color configuration
 * Edit all colors here for easy theme management
 */

export const colors = {
  // Background colors
  background: {
    primary: "#000000",
    secondary: "#b52020",
    dark: "#1a1a1a",
    navbar: "#264653",
    footer: "#264653",
  },
  
  // Text colors
  text: {
    primary: "#ffffff",
    secondary: "#e5e5e5",
    black: "#000000",
  },
  
  // Border colors
  border: {
    primary: "#ff2bf4",
    white: "#ffffff",
    whiteOpacity: "rgba(255, 255, 255, 0.2)",
    whiteOpacity30: "rgba(255, 255, 255, 0.3)",
  },
  
  // Accent/Button colors
  accent: {
    primary: "#0A6F8F",
    primaryHover: "rgba(10, 111, 143, 0.9)",
    primaryGlow: "rgba(10, 111, 143, 0.15)",
    primaryGlowLight: "rgba(10, 111, 143, 0.08)",
  },
  
  // Tag/Badge colors
  tag: {
    gray: "#6B7280",
  },
};

// Helper function to convert hex to rgb
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Helper function to convert hex to rgba
export const hexToRgba = (hex, alpha = 1) => {
  const rgb = hexToRgb(hex);
  return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})` : hex;
};

// Export CSS variables string for use in CSS files
export const getCssVariables = () => {
  return `
    --background-primary: ${colors.background.primary};
    --background-secondary: ${colors.background.secondary};
    --background-dark: ${colors.background.dark};
    --background-navbar: ${colors.background.navbar};
    --background-footer: ${colors.background.footer};
    --text-primary: ${colors.text.primary};
    --text-secondary: ${colors.text.secondary};
    --text-black: ${colors.text.black};
    --border-primary: ${colors.border.primary};
    --border-white: ${colors.border.white};
    --border-white-opacity: ${colors.border.whiteOpacity};
    --border-white-opacity-30: ${colors.border.whiteOpacity30};
    --accent-primary: ${colors.accent.primary};
    --accent-primary-hover: ${colors.accent.primaryHover};
    --accent-primary-glow: ${colors.accent.primaryGlow};
    --accent-primary-glow-light: ${colors.accent.primaryGlowLight};
    --tag-gray: ${colors.tag.gray};
  `;
};
