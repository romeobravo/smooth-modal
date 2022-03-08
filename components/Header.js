import styles from '../styles/Header.module.css'

const Filters = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-adjustments-horizontal"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="14" cy="6" r="2" />
      <line x1="4" y1="6" x2="12" y2="6" />
      <line x1="16" y1="6" x2="20" y2="6" />
      <circle cx="8" cy="12" r="2" />
      <line x1="4" y1="12" x2="6" y2="12" />
      <line x1="10" y1="12" x2="20" y2="12" />
      <circle cx="17" cy="18" r="2" />
      <line x1="4" y1="18" x2="15" y2="18" />
      <line x1="19" y1="18" x2="20" y2="18" />
    </svg>
  )
}

const Back = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-left"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="11" y2="18" />
      <line x1="5" y1="12" x2="11" y2="6" />
    </svg>
  )
}

function StickyHeader({ onProfileClick }) {
  return (
    <div className={styles.stickyHeader}>
      <div>
        <div className={`page-width ${styles.actions}`}>
          <div className={styles.button}>
            <Back />
            <div className={styles.description}>Terug</div>
          </div>
          <div className={styles.profile} onClick={onProfileClick}>
            <div className={styles.profileText}>Keuzehulp</div>
          </div>
          <div className={styles.button}>
            <Filters />
            <div className={styles.description}>Filters</div>
          </div>
        </div>
        <div className={`page-width-unpadded ${styles.quicklinks}`}>
          <div className={styles.quicklinksBox}>
            <div className={`${styles.quicklink} ${styles.activeQuicklink}`}>
              Alle telefoons
            </div>
            <div className={styles.quicklink}>Apple</div>
            <div className={styles.quicklink}>Samsung</div>
            <div className={styles.quicklink}>Android</div>
            <div className={styles.quicklink}>Top 10</div>
            <div className={styles.quicklink}>Premium</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Header({ onProfileClick }) {
  return (
    <>
      <div className={`${styles.header}`}>
        <h1 className="page-width ">mobiel.nl</h1>
      </div>
      <StickyHeader onProfileClick={onProfileClick} />
    </>
  )
}
