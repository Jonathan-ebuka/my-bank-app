"use client";

import { useRef } from "react";

/** Horizontal strip that scrolls natively and can also be dragged with a mouse. */
export function DragScroller({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  return (
    <div
      ref={ref}
      className="no-scrollbar flex cursor-grab gap-2 overflow-x-auto px-4 active:cursor-grabbing"
      onPointerDown={(event) => {
        if (event.pointerType !== "mouse" || !ref.current) return;
        drag.current = {
          active: true,
          startX: event.clientX,
          startScroll: ref.current.scrollLeft,
          moved: false,
        };
      }}
      onPointerMove={(event) => {
        const state = drag.current;
        if (!state.active || !ref.current) return;
        const delta = event.clientX - state.startX;
        if (Math.abs(delta) > 4) state.moved = true;
        ref.current.scrollLeft = state.startScroll - delta;
      }}
      onPointerUp={() => (drag.current.active = false)}
      onPointerLeave={() => (drag.current.active = false)}
      onClickCapture={(event) => {
        if (drag.current.moved) {
          event.preventDefault();
          event.stopPropagation();
          drag.current.moved = false;
        }
      }}
      onDragStart={(event) => event.preventDefault()}
    >
      {children}
    </div>
  );
}
