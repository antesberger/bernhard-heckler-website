const spacings = {
  xxs: 4,
  xs: 8,
  s: 16,
  m: 24,
  l: 32,
  xl: 48,
  xxl: 56,
  xxxl: 80,
}

module.exports = {
  purge: {
    content: ['./src/**/*.tsx', './public/index.html'],
    options: {
      whitelistPatterns: [
        /space-y-[1-9][1-2]?/,
        /flex-[col|row]/,
        /justify-[around|between|center|end|evenly|start]/,
        /w-[1-9][1-2]?/,
        /mx-[1-9][1-2]?/,
        /-ml-[1-9][1-2]?/,
        /items-[center|baseline|end|start|stretch]/,
      ],
    },
  },
  theme: {
    spacing: {
      '25%': '25%',
      '50%': '50%',
      '75%': '75%',
      '100%': '100%',
      xxs: `${spacings.xxs}px`, //4px
      xs: `${spacings.xs}px`, //8px
      s: `${spacings.s}px`, //16px
      m: `${spacings.m}px`, //24px
      l: `${spacings.l}px`, //32px
      xl: `${spacings.xl}px`, //48px
      xxl: `${spacings.xxl}px`, //56px
      xxxl: `${spacings.xxxl}px`, //80px
      inherit: 'inherit',
      'fit-content': 'fit-content',
      auto: 'auto',
    },
    screens: {
      xs: '320px',
      sm: '560px',
      md: '768px',
      lg: '1160px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['ArtegraSans', 'Helvetica', 'sans-serif'],
    },
    fontSize: {
      xxs: '0.75rem', // 12px
      xs: '0.875rem', // 14px
      sm: '0.9375rem', // 15px
      base: '1rem', // 16px
      lg: '1.5rem', // 24px
      xl: '1.875rem', // 30px
      inherit: 'inherit',
    },
    lineHeight: {
      0: '0.875rem', // 14px
      1: '1.0rem', // 16px
      2: '1.125rem', // 18px
      3: '1.25rem', // 20px
      3.5: '1.3125rem', // 21px
      4: '1.375rem', // 22px
      5: '1.5rem', // 24px
      6: '1.75rem', // 28px
      6.5: '1.8125rem', // 28px
      7: '1.875rem', // 30px
      8: '2rem', // 32px
      9: '2.125rem', // 34px
      9.5: '2.1875rem', // 35px
      10: '2.25rem', // 36px
    },
    letterSpacing: {
      tightest: '-0.028125em', //0.45px
      tight: '-0.021875rem', //0.35px
      normal: '0',
      wide: '0.046875rem', //0.75px
      widest: '0.05625rem', //0.9px
    },
    boxShadow: {
      m: `0 0px 15px 0 rgba(67, 67, 69, 0.4)`,
      none: 'none',
    },
    extend: {
      maxWidth: {
        xxs: '165px',
        xs: '320px',
        sm: '560px',
        md: '768px',
        lg: '1160px',
        xl: '1440px',
      },
      minHeight: {
        auto: 'auto',
        xxs: `${spacings.xxs}px`, //4px
        xs: `${spacings.xs}px`, //8px
        s: `${spacings.s}px`, //16px
        m: `${spacings.m}px`, //24px
        l: `${spacings.l}px`, //32px
        xl: `${spacings.xl}px`, //48px
        xxl: `${spacings.xxl}px`, //56px
        xxxl: `${spacings.xxxl}px`, //80px
        'full-screen': '100vh',
      },
      minWidth: {
        auto: 'auto',
        xxs: `${spacings.xxs}px`, //4px
        xs: `${spacings.xs}px`, //8px
        s: `${spacings.s}px`, //16px
        m: `${spacings.m}px`, //24px
        l: `${spacings.l}px`, //32px
        xl: `${spacings.xl}px`, //48px
        xxl: `${spacings.xxl}px`, //56px
        xxxl: `${spacings.xxxl}px`, //80px
        'full-screen': '100vh',
      },
      zIndex: {
        n1: '-1',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  variants: {
    extend: {
      textColor: ['focus', 'focus-within'],
      borderColor: ['focus', 'focus-within'],
      backgroundColor: ['focus', 'focus-within', 'disabled'],
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('tailwind-bootstrap-grid')({
      generateNoGutters: true,
      containerMaxWidths: {
        xs: 'none',
        sm: 'none',
        md: 'none',
        lg: '1200px',
        xl: '1200px',
      },
    }),
  ],
}
