import { useEffect, useRef, useState } from "preact/hooks"
import { createPortal } from "preact/compat"
import type { ComponentChildren } from "preact"
import styles from "./FloatingWindow.module.css"

type Position = { x: number; y: number }

type Props = {
  title: string
  children: ComponentChildren
  onClose: () => void
  defaultPosition?: Position
}

export function FloatingWindow({
  title,
  children,
  onClose,
  defaultPosition = { x: 80, y: 80 },
}: Props) {
  const [pos, setPos] = useState<Position>(defaultPosition)
  const dragOrigin = useRef<{ mx: number; my: number; px: number; py: number } | null>(null)

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      if (!dragOrigin.current) return
      const { mx, my, px, py } = dragOrigin.current
      setPos({ x: px + e.clientX - mx, y: py + e.clientY - my })
    }

    function onMouseUp() {
      dragOrigin.current = null
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [])

  function onHeaderMouseDown(e: MouseEvent) {
    e.preventDefault()
    dragOrigin.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y }
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") onClose()
  }

  const window_ = (
    <div
      class={styles.window}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      role="dialog"
      aria-modal="false"
      aria-label={title}
      onKeyDown={onKeyDown}
    >
      <div class={styles.header} onMouseDown={onHeaderMouseDown}>
        <span class={styles.title}>{title}</span>
        <button class={styles.closeBtn} onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>
      <div class={styles.body}>{children}</div>
    </div>
  )

  return createPortal(window_, document.body)
}
