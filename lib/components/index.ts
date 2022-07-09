import { ComponentStyleConfig } from "@chakra-ui/react";

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    lineHeight: "32px",
    color: "rgba(255, 255, 255, 1)",
  },
  variants: {
    "Section-Badge": {
      fontSize: "font-size: clamp(0.625rem, 0.3571rem + 0.8571vw, 1rem)",
      fontWeight: 600,
      color: "#16fcd2",
    },
    "Section-Title": {
      fontSize: "clamp(1.625rem, 1.1786rem + 1.4286vw, 2.25rem)",
      fontWeight: 700,
      lineHeight: "54px",
    },
    "Feature-Card-Title": {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "25px",
    },
    "Feature-Card-Description": {
      fontWeight: 500,
      fontSize: "1rem",
      color: "rgba(255, 255, 255, 0.6)",
    },
    "Project-Title": {
      fontWeight: 700,
      fontSize: "1.3rem",
      lineHeight: "34px",
    },
    "Price-Title": {
      fontWeight: 700,
      fontSize: "font-size: clamp(0.625rem, 0.3571rem + 0.8571vw, 1rem)",
    },
    "Pricing-Price": {
      fontWeight: 700,
      fontSize: "clamp(1.625rem, 1.1786rem + 1.4286vw, 2.25rem)",
    },
    "Testimonial-Name": {
      fontWeight: 700,
      fontSize: "18px",
    },
  },
};

export const Text: ComponentStyleConfig = {
  baseStyle: {
    lineHeight: "32px",
    fontWeight: 500,
    color: "rgba(255, 255, 255, 0.6)",
  },
  variants: {
    "Page-Description": {
      fontSize: "font-size: clamp(0.5rem, 0.1429rem + 1.1429vw, 1rem)",
    },
    "Section-Paragraph": {
      fontSize: "font-size: clamp(0.5rem, 0.1429rem + 1.1429vw, 1rem)",
    },
    "Project-Description": {
      fontWeight: 400,
      fontSize: "font-size: clamp(0.5rem, 0.1429rem + 1.1429vw, 1rem)",
      lineHeight: "34px",
      color: "rgba(255, 255, 255, 0.6)",
    },
    "Pricing-Detail": {
      fontsize: "font-size: clamp(0.5rem, 0.1429rem + 1.1429vw, 1rem)",
      lineHeight: "36px",
    },
    "Testimonial-Company": {
      fontWeight: 500,
      fontsize: "14px",
    },
    "Testimonial-Description": {
      fontSize: "1rem",
      fontWeight: 500,
      color: "rgba(255, 255, 255, 1)",
    },
  },
};

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "3px",
    fontWeight: 600,
  },
  variants: {
    Primary: {
      background: "rgba(96, 22, 252, 1)",
      color: "#fff",
      p: "1.5rem 3rem",
      fontSize: "1rem",
      _hover: {
        bg: "rgba(96, 22, 252, 0.7)",
      },
      _active: {
        bg: "rgba(96, 22, 252, 0.9)",
      },
    },
    "Primary-Light": {
      background: "rgba(96, 22, 252, 0.2)",
      color: "#fff",
      p: "1.5rem 3rem",
      fontSize: "1rem",
      _hover: {
        bg: "rgba(96, 22, 252, 0.2)",
      },
      _active: {
        bg: "rgba(96, 22, 252, 0.3)",
      },
    },
    "Primary-Light-SM": {
      background: "rgba(96, 22, 252, 0.2)",
      color: "#fff",
      fontWeight: 500,
      p: "1rem 1.5rem",
      fontSize: "0.9rem",
      _hover: {
        bg: "rgba(96, 22, 252, 0.2)",
      },
      _active: {
        bg: "rgba(96, 22, 252, 0.3)",
      },
    },
    "Primary-outline": {
      border: "1px solid rgba(96, 22, 252, 1)",
      color: "rgba(96, 22, 252, 1)",
      p: "1.5rem 3rem",
      fontSize: "1rem",
    },
    Secondary: {
      background: "rgba(255,255,255,1)",
      color: "#000",
      p: "1.5rem 3rem",
      fontSize: "1rem",
    },
    "secondary-Light": {
      background: "rgba(255,255,255,0.1)",
      color: "rgba(255,255,255,1)",
      p: "1.5rem 3rem",
      fontSize: "1rem",
      _hover: {
        bg: "rgba(255,255,255,0.2)",
      },
      _active: {
        bg: "rgba(255,255,255,0.1)",
      },
    },
    "secondary-Light-SM": {
      background: "rgba(255,255,255,0.1)",
      color: "rgba(255,255,255,1)",
      fontWeight: 500,
      p: "1rem 1.5rem",
      fontSize: "0.9rem",
      _hover: {
        bg: "rgba(255,255,255,0.2)",
      },
      _active: {
        bg: "rgba(255,255,255,0.1)",
      },
    },
    "secondary-outline": {
      border: "1px solid  rgba(255,255,255,1)",
      color: "rgba(255,255,255,1)",
      p: "1.5rem 3rem",
      fontSize: "1rem",
    },
    "secondary-outline-SM": {
      border: "1px solid  rgba(255,255,255,1)",
      color: "rgba(255,255,255,1)",
      fontWeight: 500,
      p: "1rem 1.5rem",
      fontSize: "0.9rem",
      _hover: {
        bg: "rgba(255,255,255,0.2)",
      },
      _active: {
        bg: "rgba(255,255,255,0.1)",
      },
    },
  },
};
