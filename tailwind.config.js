module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		colors: {
			baseColor1: 'var(--base-color-1)',
			baseColor2: 'var(--base-color-2)',
			baseColor3: 'var(--base-color-3)',
			baseColor4: 'var(--base-color-4)',
			baseColor5: 'var(--base-color-5)',
			baseColor6: 'var(--base-color-6)',
			secondaryColor1: 'var(--secondary-color-1)',
			secondaryColor2: 'var(--secondary-color-2)',
			secondaryColor3: 'var(--secondary-color-3)',
			primaryColor1: 'var(--primary-color-1)',
			primaryColor2: 'var(--primary-color-2)',
			tertiaryColor1: 'var(--tertiary-color-1)',
			tertiaryColor2: 'var(--tertiary-color-2)',
			warningColor: 'var(--warning-color)',
			accentColor: 'var(--accent-color-1)',
			bgGradient1: 'var(--background-gradient-1)',
			bgGradient2: 'var(--background-gradient-2)',
			bgGradient3: 'var(--background-gradient-3)',
		},
	},
	screen: {
		'3xl': '1920',
		// => @media (min-width: 1920px) { ... }
	},
	boxShadow: {
		navbarShadow: '0px 1px 6px rgba(0, 0, 0, 0.2)',
		menuShadow: 'inset 0px -1px 0px #3F8BBF',
		avatarShadow: '0px 0px 6px 3px rgba(0, 0, 0, 0.1)',
		languageMenuShadow:
			'0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05)',
	},
	dropShadow: {
		menuDropShadow: '0px 1px 6px rgba(0, 0, 0, 0.2)',
	},
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}
