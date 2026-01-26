/**
 * Centralized color configuration
 * Edit all colors here for easy theme management
 */

export const colors = {
  // Background colors
  background: {
    primary: "rgb(0, 0, 0)",
    secondary: "rgb(181, 32, 32)",
    dark: "rgb(26, 26, 26)",
    navbar: "rgb(38, 70, 83)",
    footer: "rgb(38, 70, 83)",
  },
  
  // Text colors
  text: {
    primary: "rgb(255, 255, 255)",
    secondary: "rgb(229, 229, 229)",
    black: "rgb(0, 0, 0)",
    alternative: "rgb(255, 255, 255)", // For text on dark overlays
    muted: "rgb(156, 163, 175)", // Gray-400 equivalent for subtle text
  },
  
  // Border colors
  border: {
    primary: "rgb(133, 133, 133)",
    white: "rgb(255, 255, 255)",
    whiteOpacity: "rgba(255, 255, 255, 0.2)",
    whiteOpacity30: "rgba(255, 255, 255, 0.3)",
  },
  
  // Accent colors
  accent: {
    primary: "rgb(10, 111, 143)",
    primaryHover: "rgba(10, 111, 143, 0.9)",
    primaryGlow: "rgba(10, 111, 143, 0.15)",
    primaryGlowLight: "rgba(10, 111, 143, 0.08)",
  },
  
  // Button colors
  button: {
    primary: "rgb(10, 111, 143)", // Portfolio, Subscribe buttons
    primaryHover: "rgba(10, 111, 143, 0.9)",
    contact: "rgb(113, 115, 120)", // Contact buttons
    contactHover: "rgba(0, 0, 0, 0.9)",
    learn: "rgb(0, 0, 0)", // Learn buttons in projects
    learnHover: "rgba(0, 0, 0, 0.9)",
  },
  
  // Tag/Badge colors
  tag: {
    gray: "rgb(107, 114, 128)",
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
    --text-alternative: ${colors.text.alternative};
    --text-muted: ${colors.text.muted};
    --border-primary: ${colors.border.primary};
    --border-white: ${colors.border.white};
    --border-white-opacity: ${colors.border.whiteOpacity};
    --border-white-opacity-30: ${colors.border.whiteOpacity30};
    --accent-primary: ${colors.accent.primary};
    --accent-primary-hover: ${colors.accent.primaryHover};
    --accent-primary-glow: ${colors.accent.primaryGlow};
    --accent-primary-glow-light: ${colors.accent.primaryGlowLight};
    --button-primary: ${colors.button.primary};
    --button-primary-hover: ${colors.button.primaryHover};
    --button-contact: ${colors.button.contact};
    --button-contact-hover: ${colors.button.contactHover};
    --button-learn: ${colors.button.learn};
    --button-learn-hover: ${colors.button.learnHover};
    --tag-gray: ${colors.tag.gray};
  `;
};
