export function formattedDate(date: Date): string {
	return date.toLocaleDateString("en-US");
}

export interface Streak {
	currentCount: number
	startDate: string
	lastLoginDate: string
}
