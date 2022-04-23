import { keyframes } from 'styled-components';

export const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const gradient2 = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const simpleFade = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

export const fadeUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(3rem) scale(0.8);
	}

	to {
		opacity: 1;
		transform: translateX(0) scale(1);
	}
`;

export const fade = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

export const sweep = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-1rem);
	}
  100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

export const jumpingUp = keyframes`
	0% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-1rem);
	}

	100% {
		transform: translateY(0);
	}
`;

export const jumpingDown = keyframes`
	0% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-1rem);
	}

	100% {
		transform: translateY(0);
	}
`;

export const scaleUp = keyframes`
	0% {
		transform: scale(0.8);
	}

	50% {
		transform: scale(1.3);
	}

	100% {
		transform: scale(0.8);
	}
`;

export const turning = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

export const showhide = keyframes`
	0% {
		opacity: 0;
		display: none;
	}

	10% {
		display: flex;
		opacity: 0;
	}

	50% {
		display: flex;
		opacity: 1;
	}

	100% {
		display: flex;
		opacity: 1;
	}
`;

export const jumpingFade = keyframes`
	0% {
		transform: translateY(0);
		opacity: 0.5;
	}

	50% {
		transform: translateY(-1rem);
		opacity: 1;
	}

	100% {
		transform: translateY(0);
		opacity: 0.5;
	}
`;
