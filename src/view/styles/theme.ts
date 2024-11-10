import { Theme } from "./types";

const colors: Theme["colors"] = {
  accent: {
    1: "#752AF5",
  },
  negative: "#C84A4A",
  secondary: "#FF7241",
  common: {
    error: "#ED3C30",
    success: "green",
  },
  white: "#fff",
  black: {
    2: "#000000",
  },
};

export const theme: Theme = {
  colors,
  input: {
    borderRadius: 6,
    textVariant: "h4",
    layout: {
      base: {
        height: 60,
        paddingHorizontal: 0,
      },
      multiline: {
        height: 104,
        paddingHorizontal: 0,
      },
    },
    colors: {
      base: {
        text: colors.black["2"],
        placeholder: colors.black["1"],
        background: colors.white,
        border: colors.black["7"],
        selectionColor: colors.accent[1],
        icon: colors.black["1"],
      },
    },
  },
  fontFamily: {
    regular: "Mukta-Regular",
    medium: "Mukta-Medium",
    semiBold: "Mukta-SemiBold",
    bold: "Mukta-Bold",
    extra: "Mukta-ExtraBold",
  },
  text: {
    h0: {
      fontFamily: "Mukta-Regular",
      fontSize: 30,
      lineHeight: 30,
    },
    h1: {
      fontFamily: "Mukta-Regular",
      fontSize: 22,
      lineHeight: 37,
    },
    h2: {
      fontFamily: "Mukta-Bold",
      fontSize: 22,
      lineHeight: 28,
    },
    h3: {
      fontFamily: "Mukta-Regular",
      fontSize: 18,
      lineHeight: 30,
    },
    h4: {
      fontFamily: "Mukta-Medium",
      fontSize: 18,
      lineHeight: 30,
    },
    h5: {
      fontFamily: "Mukta-Regular",
      fontSize: 16,
      lineHeight: 27,
    },

    p1: {
      fontFamily: "Mukta-Regular",
      fontSize: 16,
      lineHeight: 20,
    },
    p3: {
      fontFamily: "Mukta-Regular",
      fontSize: 16,
      lineHeight: 23,
    },
    p4: {
      fontFamily: "Mukta-Regular",
      fontSize: 14,
      lineHeight: 18,
    },
    p5: {
      fontFamily: "Mukta-Regular",
      fontSize: 14,
      lineHeight: 16,
    },
    p6: {
      fontFamily: "Mukta-Regular",
      fontSize: 12,
      lineHeight: 18,
    },
    p7: {
      fontFamily: "Mukta-Bold",
      fontSize: 10,
      lineHeight: 18,
    },
  },
};
