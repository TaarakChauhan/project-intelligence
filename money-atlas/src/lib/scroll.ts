import type { MouseEvent } from "react"

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function onInPageClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
  event.preventDefault()
  scrollToId(id)
}
