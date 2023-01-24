# `@sazed/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by Duolingo,
and made following Joe Previte's course -
written in TypeScript and meant for the browser (uses `localStorage`).

## Install

```shell
yarn add @sazed/streak-counter
```

## Usage

```tsx
import { streakCounter } from '@sazed/streak-counter';

const today = new Date();
const streak = streakCounter(localStorage, today);
```

streak returns an object:

```js
{
	currentCount: 1,
	lastLoginDate: "01/24/2023",
	startDate: "01/24/2023",
}
```
