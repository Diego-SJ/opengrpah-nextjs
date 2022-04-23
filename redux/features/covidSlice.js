import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	answer: null,
	currentStep: 0,
	data: {},
	vaccines: [
		{ value: 'Pfizer', name: 'Pfizer', effectiveness: '91.30%', dosis: 2, days: 14 },
		{ value: 'Moderna', name: 'Moderna', effectiveness: '92%', dosis: 2, days: 14 },
		{ value: 'Janssen', name: 'Janssen', effectiveness: '67%', dosis: 1, days: 14 },
		{ value: 'AstraZeneca', name: 'AstraZeneca', effectiveness: '70%', dosis: 2, days: 14 },
		{ value: 'Novavax', name: 'Novavax', effectiveness: '90.40%', dosis: 2, days: 14 },
		{ value: 'Sputnik V', name: 'Sputnik V', effectiveness: '92%', dosis: 2, days: 14 },
		{ value: 'CanSino', name: 'CanSino', effectiveness: '69%', dosis: 1, days: 28 },
		{ value: 'Sinovac', name: 'Sinovac', effectiveness: '51%', dosis: 2, days: 14 },
		{ value: 'Sinopharm', name: 'Sinopharm', effectiveness: '78%', dosis: 2, days: 14 },
		{ value: 'Covaxin', name: 'Covaxin', effectiveness: '78%', dosis: 2, days: 14 }
	]
};

const covidSlice = createSlice({
	name: 'covid',
	initialState,
	reducers: {
		setAnswer(state, action) {
			state.answer = action.payload;
		},
		setCurrentStep(state, action) {
			state.currentStep = action.payload.step;
			state.data = action.payload.data;
		}
	}
});

export const { setAnswer, setCurrentStep } = covidSlice.actions;

export default covidSlice.reducer;
