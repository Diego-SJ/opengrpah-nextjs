export const MONTHS = [
	{ value: '01', name: 'Enero' },
	{ value: '02', name: 'Febrero' },
	{ value: '03', name: 'Marzo' },
	{ value: '04', name: 'Abril' },
	{ value: '05', name: 'Mayo' },
	{ value: '06', name: 'Junio' },
	{ value: '07', name: 'Julio' },
	{ value: '08', name: 'Agosto' },
	{ value: '09', name: 'Septiembre' },
	{ value: '10', name: 'Octubre' },
	{ value: '11', name: 'Noviembre' },
	{ value: '12', name: 'Diciembre' }
];

const year = new Date().getFullYear();
export const YEARS = Array.from(new Array(120), (_, idx) => year - idx).map((year) => ({
	value: `${year}`,
	name: `${year}`
}));

export const DAYS = Array.from(new Array(31), (_, idx) => 1 + idx).map((day) => ({
	value: day < 10 ? `0${day}` : `${day}`,
	name: `${day}`
}));
