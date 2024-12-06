module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#fff",
      black: "#222",
      orange: "#ff7d43",
      gray: "#2c3c44",
      "light-gray": "#98a4b0",
      red: "#f54336",
    },
    content: {
      placeholder: "'🖼️'",
    },
    fontFamily: {
      arsenal: "Arsenal, sans-serif",
      system: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
        "Apple Color Emoji",
        "Twemoji Mozilla",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
        "EmojiOne Color",
        "Android Emoji",
      ],
    },
    animation: {
      "interrupt-click": "interrupt-click 0.2s forwards",
      jump: "jump-left 1.5s linear infinite alternate, jump-top 0.75s cubic-bezier(0, 200, 0.8, 200) infinite",
      "linear-gradient": "linear-gradient 10s ease infinite",
      wave: "wave 2s linear infinite",
    },
    keyframes: {
      "interrupt-click": {
        to: { "pointer-events": "none" },
      },
      slide: {
        from: { left: "-100%" },
        to: { left: "100%" },
      },
      wave: {
        to: { "background-position": "calc(50% + 1.6em) 0, calc(50% + 3.2em) 0.8em" },
      },
      "jump-left": {
        from: { left: "0" },
        to: { left: "calc(100% - 10px)" },
      },
      "jump-top": {
        from: { top: "0" },
        to: { top: "-0.1px" },
      },
    },
    screens: {
      standalone: {
        raw: "(display-mode: standalone)",
      },
    },
    transitionDuration: {
      DEFAULT: ".3s",
    },
  },
};
