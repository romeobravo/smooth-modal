import 'scroll-behavior-polyfill'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import Header from '../components/Header'
import { Modal, ModalActionBar, ModalContent } from '../components/Modal'
import { StaticModal } from '../components/StaticModal'

function ProfileModal({ scrollable, opened, onClose }) {
  const [step, updateStep] = useState(true)
  const [keep, updateKeep] = useState(undefined)

  const [controlledOpen, updateOpen] = useState(opened)

  useEffect(() => {
    updateOpen(opened)
  }, [opened])

  const ModalModule = scrollable ? Modal : StaticModal

  return (
    <ModalModule
      open={controlledOpen}
      title="Profiel"
      onClose={onClose}
      height={80}
    >
      {step ? (
        <ModalContent>
          <form>
            <div
              className={styles.section}
              onChange={(e) => updateKeep(e.target.value === 'true')}
            >
              <h2>Wil je je huidige 06-nummer-behouden?</h2>
              <div>
                <input
                  id="nummerbehoud-true"
                  type="radio"
                  value={true}
                  name="nummerbehoud"
                  checked={keep}
                />
                <label for="nummerbehoud-true">
                  Ja, ik wil mijn nummer behouden
                </label>
              </div>
              <div>
                <input
                  id="nummerbehoud-false"
                  type="radio"
                  value={false}
                  name="nummerbehoud"
                  checked={typeof keep !== 'undefined' && !keep}
                />
                <label for="nummerbehoud-false">
                  Nee, ik wil een nieuw nummer
                </label>
              </div>
            </div>

            {keep && (
              <>
                <div className={styles.section}>
                  <div>Huidige provider</div>
                  <select>
                    <option>KPN</option>
                  </select>
                </div>
                <div className={styles.section}>
                  <div>Huidige abonnementsvorm</div>
                  <div>
                    <input
                      id="abonnementsvorm-true"
                      type="radio"
                      value={true}
                      name="abonnementsvorm"
                    />
                    <label for="abonnementsvorm-true">Abonnement</label>
                  </div>
                  <div>
                    <input
                      id="abonnementsvorm-false"
                      type="radio"
                      value={false}
                      name="abonnementsvorm"
                    />
                    <label for="abonnementsvorm-false">Prepaid</label>
                  </div>
                </div>
              </>
            )}
          </form>
        </ModalContent>
      ) : (
        <ModalContent>
          <form>
            <div className={styles.section}>
              <h4>Van welke provider heb je thuis internet?</h4>
              <select>
                <option>KPN</option>
              </select>
            </div>

            <div className={styles.section}>
              <h4>Andere mobiele abonnementen</h4>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
              <div>Budget Mobiel</div>
              <div>T-Mobile Mobiel</div>
              <div>Tele2 Mobiel</div>
            </div>
          </form>
        </ModalContent>
      )}

      <ModalActionBar>
        <div onClick={() => onClose(false)}>Wissen</div>
        {step ? (
          <div
            className="button button--left"
            onClick={() => updateStep(!step)}
          >
            Volgende
          </div>
        ) : (
          <div className="button button--left" onClick={() => onClose(false)}>
            Bevestigen
          </div>
        )}
      </ModalActionBar>
    </ModalModule>
  )
}

export default function Home() {
  const [opened, openModal] = useState(false)

  const onClose = () => {
    openModal(false)
  }

  const unScrollable =
    typeof window !== 'undefined' &&
    window.location.search.includes('scroll=false')

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header onProfileClick={() => openModal(true)} />

        {/* <ProfileModal onClose={onClose} opened={opened} /> */}
        <ProfileModal
          scrollable={!unScrollable}
          onClose={onClose}
          opened={opened}
        />

        <div className={`page-width ${styles.content}`}>
          <h1>Mobiele telefoons</h1>

          <div className={styles.product}></div>
          <div className={styles.product}></div>
          <div className={styles.product}></div>
          <div className={styles.product}></div>
          <div className={styles.product}></div>
        </div>
        <button onClick={() => openModal(!opened)}>open modal</button>
      </main>
    </div>
  )
}
