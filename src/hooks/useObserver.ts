import { useEffect, useRef } from 'react'

export const useObserver = (
	callback: (entries: IntersectionObserverEntry[]) => Promise<void>
) => {
	const lastElement = useRef<HTMLDivElement>(null)
	const observer = useRef<IntersectionObserver>()

	useEffect(() => {
		observer.current = new IntersectionObserver(callback)
		observer.current?.observe(lastElement.current as HTMLDivElement)
	}, [])

	return { lastElement }
}
