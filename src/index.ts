import { formattedDate } from "../src/utils";

interface Streak {
	currentCount: number
	startDate: string
	lastLoginDate: string
}

// used for storing in localStorage
const KEY = "streak";

export function streakCounter(storage: Storage, date: Date): Streak {
	const streakInLocalStorage = storage.getItem(KEY);
	if (streakInLocalStorage) {
		try {
			const streak = JSON.parse(streakInLocalStorage);
			const state = "increment";
			const SHOULD_INCREMENT = state;

			if (SHOULD_INCREMENT) {
				const updatedStreak = {
					...streak,
					currentCount: streak.currentCount + 1,
					lastLoginDate: formattedDate(date),
				};

				return updatedStreak;
			}
			return streak;
		} catch (error) {
			console.error("Failed to parse streak from localStorage");
		}
	}

	const streak = {
		currentCount: 1,
		startDate: formattedDate(date),
		lastLoginDate: formattedDate(date),
	}

	// store in localStorage
	storage.setItem(KEY, JSON.stringify(streak));

	return streak;
}
