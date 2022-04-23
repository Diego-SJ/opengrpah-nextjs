import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
		height: 100%;
    padding: 0;
    margin: 0;
    font-family: "Manrope", "Helvetica", "Arial", sans-serif !important;
		background-size: cover;
		font-size: 62.5%;

		// Iphone 5, 6, 7 y 8
		@media screen and (max-height: 570px) and (max-width: 350px) {
			font-size: 45% !important;
		}

		@media screen and (max-height: ${({ theme }) => theme.breakPoints.sm}) {
			font-size: 53%;
		}

		@media screen and (min-width: 700px) {
			font-size: 64%;
		}

		@media screen and (min-width: 1000px) {
			font-size: 70%;
		}

    @media screen and (min-width: 1300px) {
			font-size: 75%;
		}

		@media screen and (min-width: 1800px) {
			font-size: 80%;
		}

		@media screen and (min-width: 2100px) {
			font-size: 100%;
		}

		@media screen and (min-width: 2500px) {
			font-size: 115%;
		}
  }

  *,
	*::after,
	*::before {
		font-size: 62.5%;
    box-sizing: border-box;
		font-family: "Manrope", "Helvetica", "Arial", sans-serif !important;
		scroll-behavior: smooth;
  }

	*::-webkit-scrollbar {
		display: none; /* Chrome */
		-ms-overflow-style: none;  /* IE and Edge */
  	scrollbar-width: none;  /* Firefox */
	}

	.MuiAutocomplete-popper {
		& div {
			background-color: transparent !important;
			color: transparent;
			border: none;
			box-shadow: none;
		}
	}

	.section2Covid,
	.section4Covid {
		width: 100%;
		min-height: 100vh;
		display: flex !important;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: 3rem 0;

		@media screen and (min-width: ${({ theme }) => theme.breakPoints.md}) {
			height: 100vh;
			padding: 0;
		}
	}

	font {
		font-size: inherit;
	}

	b {
		font-size: inherit;
		font-weight: 600;
	}
`;
