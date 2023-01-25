interface Streak {
	currentCount: number
	startDate: string
	lastLoginDate: string
}

export function streakCounter(storage: Storage, date: Date): Streak {
	return {
		currentCount: 0,
		startDate: '01/25/2023',
		lastLoginDate: '01/25/2023',
	}
}
