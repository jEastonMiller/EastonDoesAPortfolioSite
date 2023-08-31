import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.homePage}>
        <h1>Howdy!</h1>
        
        <p>I am a full stack software engineer who develops tools and products using 
          React, Express, Node.js, Webpack, and TypeScript with experience implementing 
          both SQL and NoSQL databases, containerizing applications, and deployment to 
          Kubernetes clusters. Recently I have been developing an open source product 
          with a team that consolidates Kubernetes monitoring tools into one 
          comprehensive dashboard. At the beginning of 2023 I spoke on the development 
          and use cases of Kafka which I am currently implementing in a project.
        </p>

        <Image
          className='guide'
          src="/../public/guide.png"
          width={400}
          height={600}
          alt="Picture of the author"
        />
      </div>
    </main>
  )
}
