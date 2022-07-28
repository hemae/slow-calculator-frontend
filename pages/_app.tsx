import '@styles/globals.scss'
import type {AppProps} from 'next/app'
import {wrapper} from '@store'
import {ErrorBoundary} from '@appComponents'
import NextNProgress from 'nextjs-progressbar'
import {$primary} from '@styles/colors'
import useApp from '@pageHooks/useApp'
import {PopUps, Alerts} from '@UI'


function App({Component, pageProps}: AppProps) {

  useApp()

  return (
      <ErrorBoundary>
        {/*<NextNProgress color={$primary}/>*/}
        <Component {...pageProps} />
        <Alerts/>
        <PopUps/>
      </ErrorBoundary>
  )
}

export default wrapper.withRedux(App)
