export function formattedDate(date: Date): string {
	return date.toLocaleDateString("en-US");
}

export interface Streak {
	currentCount: number
	startDate: string
	lastLoginDate: string
}

export const buildStreak = (
	date: Date,
	overrideDefaults?: Partial<Streak>,
): Streak => {
	const defaultStreak = {
		currentCount: 1,
		startDate: formattedDate(date),
		lastLoginDate: formattedDate(date),
	}

	return {
		...defaultStreak,
		...overrideDefaults
	}
}
