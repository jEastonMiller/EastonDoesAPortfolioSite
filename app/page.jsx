import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.scss'
import Link from 'next/link'
import Guide from './components/guide'
import Node from './components/node'
import NodeTwo from './components/nodetwo'
import Blob from './components/blob'
import NodeVisualizer from './components/nodeVisualizer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let palette = {
    primary: 'hsla(248, 34%, 26%, 1.0)',
    secondary: 'hsla(0, 0%, 97%, 1.0)',
    ternary: 'hsla(3, 80%, 52%, 1.0)',
    quaternary: 'hsla(4, 82%, 66%, 1.0)'
  }

  return (
    <main className={styles.main}>
      
        <div>
          {/* <h1>Howdy!</h1>
          
          <p>I am a full stack software engineer who develops tools and products using 
            React, Express, Node.js, Webpack, and TypeScript with experience implementing 
            both SQL and NoSQL databases, containerizing applications, and deployment to 
            Kubernetes clusters. Recently I have been developing an open source product 
            with a team that consolidates Kubernetes monitoring tools into one 
            comprehensive dashboard. At the beginning of 2023 I spoke on the development 
            and use cases of Kafka which I am currently implementing in a project.
          </p> */}

          
        </div>
        {/* <object
          height="200px"
          width='auto'
          type='pdf'
          src='.../public/assets/test.pdf'
        ></object> */}

        <NodeVisualizer />
        {/* <div className={styles.testParent}>
          <Blob type="primary"/>
        </div> */}
        
        

        <Guide />

    </main>
  )
}
