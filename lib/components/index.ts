import { ComponentStyleConfig } from "@chakra-ui/react";

export const Heading: ComponentStyleConfig = {
  baseStyle: {
    lineHeight: "32px",
    color: "rgba(255, 255, 255, 1)",
  },
  variants: {
    "Section-Badge": {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#16fcd2",
    },
    "Page-Title": {
      fontSize: "36px",
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
      fontSize: "1rem",
    },
    "Section-Paragraph": {
      fontSize: "1rem",
    },
  },
};

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "3px",
    fontWeight: 600,
  },
  sizes: {
    sm: {
      p: "1rem 1.5rem",
      fontSize: "0.5rem",
    },
    md: {
      p: "3rem 4rem"
    }
  },
  variants: {
    Primary: {
      background: "rgba(96, 22, 252, 1)",
      color: "#fff",
      p: "1.5rem 3rem",
      fontSize: "1rem",
      _hover: {
        bg:"rgba(96, 22, 252, 0.7)"
      },
      _active: {
        bg: "rgba(96, 22, 252, 0.9)"
      }
    },
    "Primary-Light": {
      background: "rgba(96, 22, 252, 0.3)",
      color: "#fff",
      p: "1.5rem 3rem",
      fontSize: "1rem",
        _hover: {
        bg:"rgba(96, 22, 252, 0.2)"
      },
      _active: {
        bg: "rgba(96, 22, 252, 0.3)"
      }
    },
    "Primary-outline": {
      border: "1px solid rgba(96, 22, 252, 1)",
      color: "rgba(96, 22, 252, 1)",
      p: "1.5rem 3rem",
      fontSize: "1rem",
    },
    secondary: {
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
    },
    "secondary-outline": {
      border: "1px solid  rgba(255,255,255,1)",
      color: "rgba(255,255,255,1)",
      p: "1.5rem 3rem",
      fontSize: "1rem",
    },
  },
};
