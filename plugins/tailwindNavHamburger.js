const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(
  function (options) {
    return function ({ addUtilities, theme }) {
      const navCssTransformations = (burger, scaler = 1) => {
        const w = burger.w * scaler
        const t1 = burger.t1 * scaler
        const t2 = t1 * 2
        const h = (burger.h / burger.w) * w
        const spanH = t1 / 2
        return { w, h, t1, t2, spanH }
      }
      const values = theme('hamburger')
      const w = options.width ?? 60
      const scaler = w / values.w
      const transformedVals = navCssTransformations(values, scaler)
      const thickness = options.thickness ?? transformedVals.spanH
      const utilities = [
        {
          '.hamburger-w': { width: `${transformedVals.w}px` },
        },
        {
          '.hamburger-h': { height: `${transformedVals.h}px` },
        },
        {
          '.hamburger-t1': { top: `${transformedVals.t1}px` },
        },
        {
          '.hamburger-t2': { top: `${transformedVals.t2}px` },
        },
        {
          '.hamburger-span-h': { height: `${thickness}px` },
        },
      ]
      addUtilities(utilities)
    }
  },
  function (options) {
    return {
      theme: {
        hamburger: {
          w: 60,
          h: 45,
          t1: 18,
          t2: 36,
          'span-h': 9,
        },
      },
    }
  }
)
