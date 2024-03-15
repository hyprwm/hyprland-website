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
