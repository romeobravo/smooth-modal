import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import styles from '../styles/Modal.module.css'

const Close = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-x"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#000000"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function Modal({ children, title, open: desiredOpen, onClose }) {
  const [open, updateOpen] = useState(desiredOpen)
  const modalRef = useRef(null)

  const modalCoords = useRef({
    y: 0,
    t: null,
    moving: false,
  })

  const containerRef = useCallback((node) => {
    if (node === null) return

    node.addEventListener('scroll', onScroll)
    window.setTimeout(() => {
      node.classList.add(styles.in)
      document.body.classList.add('frozen')
    }, 10)

    node.scrollTop = 100
  }, [])

  useEffect(() => {
    if (!desiredOpen && open) {
      console.log(containerRef)
      close(containerRef)
    }

    if (desiredOpen && !open) {
      updateOpen(true)
    }
  }, [desiredOpen])

  function close() {
    const container = modalRef.current.closest(`.${styles.modalContainer}`)
    container.classList.remove(styles.in)
    document.body.classList.remove('frozen')

    window.setTimeout(() => {
      updateOpen(false)
      onClose()
    }, 400)
  }

  function handleClick(e) {
    if (
      e.target.className.includes &&
      e.target.className.includes(styles.modalContainer)
    ) {
      close()
    }
  }

  function onScroll(e) {
    if (e.target.scrollTop === 100) {
      modalCoords.current = {
        moving: false,
        y: 0,
        t: null,
      }
    } else if (!modalCoords.current.moving) {
      console.log('START MOVING')

      modalCoords.current = {
        moving: true,
        y: e.target.scrollTop,
        t: Date.now(),
      }
    }

    if (e.target.scrollTop === 0) {
      const node = e.target

      const changeY = modalCoords.current.y - e.target.scrollTop
      const changeT = Date.now() - modalCoords.current.t

      const velocity = changeY / changeT
      const fastSwipe = velocity > 1

      if (fastSwipe) {
        close()
      } else if (node.scrollTop === 0) {
        node.scrollTo({ top: 100, behavior: 'smooth' })
      }
    }
  }

  if (!open) return null

  return (
    <div
      ref={containerRef}
      className={styles.modalContainer}
      onClick={handleClick}
    >
      <div ref={modalRef} className={`${styles.modal}`}>
        <div className={styles.dragbarContainer}>
          <div className={styles.dragbar} />
        </div>
        <div className={styles.titlebar}>
          <div className={styles.modalTitle}>{title}</div>
          <div
            className={styles.close}
            onClick={(e) => {
              close()
            }}
          >
            <Close />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export function ModalContent({ children }) {
  return <div className={styles.modalContent}>{children}</div>
}

export function ModalActionBar({ children }) {
  return <div className={styles.modalActions}>{children}</div>
}
