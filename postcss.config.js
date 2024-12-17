module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
    "tailwindcss/nesting": {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
