import type { Writable } from 'svelte/store'

export type Card3dContext = Writable<{
	hasMouseEntered: boolean
	coordinates: [x: number, y: number]
}>
