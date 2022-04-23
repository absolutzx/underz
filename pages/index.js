import Head from 'next/head'
import Image from 'next/image'
import profile_picture from '../assets/hollor_knight3.gif'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.text}>Hello there! Im @underz</h1>
          <p>Im just a virus, wanting to escape, from the programmers of life.</p>
      </div>
      <div className={styles.profile}>
        <Image
          src={profile_picture}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}
