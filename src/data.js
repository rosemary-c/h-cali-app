export const routines = {
	hamptons: [
		['push_ups', 'leg_raises'],
		['pull_ups', 'squats'],
		['bridges'],
	],
	workweek: [
		['push_ups'],
		['bridges'],
		['pull_ups'],
		['leg_raises'],
		['squats'],
	],
};
export const progressions = {
	push_ups: [
		{
			name: 'Wall Push-Ups',
			setValue: 3,
			repValue: 50,
			variation: '',
		},
		{
			name: 'Incline Push-Ups',
			setValue: 3,
			repValue: 40,
			variation: '',
		},
		{
			name: 'Knee Push-Ups',
			setValue: 2,
			repValue: 25,
			variation: '',
		},
		{
			name: 'Full Push-Ups',
			setValue: 2,
			repValue: 25,
			variation: '',
		},
		{
			name: 'Narrow Push-Ups',
			setValue: 2,
			repValue: 20,
			variation: '',
		},
		{
			name: 'Side-Staggered Push-Ups',
			setValue: 2,
			repValue: 15,
			variation: 'Both Sides',
		},
		{
			name: 'Archer Push-Ups',
			setValue: 2,
			repValue: 9,
			variation: 'Both Sides',
		},
		{
			name: 'Sliding One-Arm Push-Ups',
			setValue: 2,
			repValue: 9,
			variation: 'Both Sides',
		},
		{
			name: 'One-Arm Push-Ups',
			setValue: 2,
			repValue: 9,
			variation: 'Conventional',
		},
		{
			name: 'One-Arm Push-Ups',
			setValue: 2,
			repValue: 20,
			variation: 'Feet Together',
		},
	],
	leg_raises: [
		{
			name: 'Knee Tucks',
			setValue: 3,
			repValue: 40,
			variation: '',
		},
		{
			name: 'Knee Raises',
			setValue: 3,
			repValue: 40,
			variation: '',
		},
		{
			name: 'Bent Leg Raises',
			setValue: 3,
			repValue: 35,
			variation: '',
		},
		{
			name: 'Leg Raises',
			setValue: 2,
			repValue: 25,
			variation: '',
		},
		{
			name: 'Hanging Knee Raises',
			setValue: 2,
			repValue: 20,
			variation: '',
		},
		{
			name: 'Hanging Bent Leg Raises',
			setValue: 2,
			repValue: 15,
			variation: '',
		},
		{
			name: 'Hanging Leg Raises',
			setValue: 2,
			repValue: 9,
			variation: '',
		},
		{
			name: 'L-Hold',
			setValue: 1,
			repValue: '30s',
			variation: '',
			note: 'Do hanging leg raises after your L-Hold workout to maintain a dynamic element to your core training.'
		},
		{
			name: 'V-Hold',
			setValue: 1,
			repValue: '30s',
			variation: '',
			note: 'Do Hanging Leg Raises after your V-Hold workout to maintain a dynamic element to your core training.'
		},
		{
			name: 'Hanging V-hold',
			setValue: 1,
			repValue: '60s',
			variation: '',
			note: 'Do hanging leg raises after your Hanging V-Hold workout to maintain a dynamic element to your core training.'
		},
	],
	pull_ups: [
		{
			name: 'Wall Pull-Ups',
			setValue: 3,
			repValue: 50,
			variation: '',
		},
		{
			name: 'Incline Pull-Ups',
			setValue: 3,
			repValue: 30,
			variation: 'Chest Height',
		},
		{
			name: 'Incline Pull-Ups',
			setValue: 3,
			repValue: 25,
			variation: 'Hip Height',
		},
		{
			name: 'Jackknife Pull-Ups',
			setValue: 3,
			repValue: 25,
			variation: '',
		},
		{
			name: 'Full Pull-Ups / Chin-Ups',
			setValue: 2,
			repValue: 12,
			variation: '',
		},
		{
			name: 'Narrow Pull-Ups',
			setValue: 2,
			repValue: 9,
			variation: '',
		},
		{
			name: 'One-Hand Pull-Ups',
			setValue: 2,
			repValue: 9,
			variation: 'Both Sides',
		},
		{
			name: 'Archer Pull-Ups',
			setValue: 2,
			repValue: 7,
			variation: 'Both Sides',
			note: 'Train one side at a time. Alternating makes it easier. '
		},
		{
			name: 'One-Arm Pull-Ups',
			setValue: 2,
			repValue: 20,
			variation: 'Both Sides',
		},
	],
	squats: [
		{
			name: 'Jackknife Squats',
			setValue: 3,
			repValue: 35,
			variation: '',
		},
		{
			name: 'Assisted Squats',
			setValue: 3,
			repValue: 30,
			variation: '',
		},
		{
			name: 'Half Squats', // 2, 35 original
			setValue: 3,
			repValue: 25,
			variation: '',
		},
		{
			name: 'Full Squats',
			setValue: 2,
			repValue: 50,
			variation: '',
		},
		{
			name: 'Narrow Squats',
			setValue: 2,
			repValue: 25,
			variation: '',
		},
		{
			name: 'Side-Staggered Squats',
			setValue: 2,
			repValue: 20,
			variation: 'Both Sides',
		},
		{
			name: 'Front-Staggered Squats',
			setValue: 2,
			repValue: 20,
			variation: 'Both Sides',
		},
		{
			name: 'Assisted One-Leg Squats',
			setValue: 2,
			repValue: 9,
			variation: 'Both Sides',
		},
		{
			name: 'One-Leg Chair Squats',
			setValue: 2,
			repValue: 9,
			variation: 'Both Sides',
		},
		{
			name: 'One-Leg Squats',
			setValue: 2,
			repValue: 20,
			variation: 'Both Sides',
		},
	],
	bridges: [
		{
			name: 'Short Bridges',
			setValue: 3,
			repValue: 50,
			variation: '',
		},
		{
			name: 'Straight Bridges',
			setValue: 3,
			repValue: 40,
			variation: '',
		},
		{
			name: 'Raised Straight Bridges',
			setValue: 2,
			repValue: 25,
			variation: '',
		},
		{
			name: 'Head Bridges',
			setValue: 2,
			repValue: 20,
			variation: '',
		},
		{
			name: 'Full Bridges',
			setValue: 2,
			repValue: 15,
			variation: '',
		},
		{
			name: 'One-Leg Gecko Bridges',
			setValue: 2,
			repValue: 9,
			variation: 'Both Sides',
		},
		{
			name: 'Walking Bridges',
			setValue: 1,
			repValue: '25 steps',
			variation: '',
		},
		{
			name: 'Wall-Walking Bridges',
			setValue: 2,
			repValue: 9,
			variation: '',
		},
		{
			name: 'Stand-to-Stand Bridges',
			setValue: 2,
			repValue: 20,
			variation: '',
			note: 'Work the eccentric (negative) portion of this first. Descend into a bridge and stand up normally. After you can do this well, lean back onto objects of decreasing height (stairs work well) until you can finally lean back into this exercise and stand back up with the power of your core and legs.'
		},
	],
};
