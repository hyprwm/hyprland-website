import type { Observable } from 'rxjs'

export interface CommunityProfile {
	image: string
	coordinates: [number, number]
	containerClass: string[]
	size: number
	quote?: string
	onDragStart?: (event: DragEvent) => void
	onDragEnd?: (event: DragEvent) => void
	onHover?: (event: MouseEvent) => void
}

export interface CommunityContext {
	/** The size of the biggest profile picture. Non reactive for now */
	biggestSize: number
	/** The size of the smallest profile picture. Non reactive for now */
	smallestSize: number
	/** Get the HTML wrapper element / drag bounds element */
	getSectionElement: () => HTMLElement
	/** State for community profile stuff like interactions */
	profilesState$: Observable<ProfilesState> & {
		update: (updater: (state: ProfilesState) => ProfilesState) => void
	}
}

interface ProfilesState {
	/**
	 * Which profiles intersect with each other
	 * Alphabetically sorted, like `a-b`, not `b-a`, to prevent duplicates.
	 * No tuples, so that a set can look them up and delete them easily.
	 */
	intersections: `${string}-${string}`[]
	/** All tagged profiles */
	profiles: Record<string, { size: number; coordinates: [x: number, y: number] }>
	/** Current active events. Currently not used, but maybe in the future */
	events: string[]
}
