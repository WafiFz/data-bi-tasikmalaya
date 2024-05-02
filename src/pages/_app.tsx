// ** Next Imports
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Router } from 'next/router'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React from 'react'
import { IntlProvider } from 'react-intl'
import Cookies from 'universal-cookie'

// ** Loader Import
import NProgress from 'nprogress'

// ** Emotion Imports
import { CacheProvider } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'

// ** Config Imports
import themeConfig from 'src/configs/themeConfig'

// ** Component Imports
import SplashScreen from 'src/@core/components/bi-tasik/splash-screen'

// ** Contexts
import {
  SettingsConsumer,
  SettingsProvider
} from 'src/@core/context/settingsContext'

// ** State Management
import { RecoilRoot } from 'recoil'

// ** Utils Imports
import { createEmotionCache } from 'src/@core/utils/create-emotion-cache'

// ** React Perfect Scrollbar Style
import 'react-perfect-scrollbar/dist/css/styles.css'

// ** Global css styles
import '../../styles/globals.css'
import UserLayoutHorizontal from 'src/layouts/UserLayoutHorizontal'

// ** Library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ** Define available languages and their messages
import { languages } from 'src/@core/languages'

const cookies = new Cookies()

const getLanguageFromCookie = () => {
  return cookies.get('lang') || 'id'
}

// ** Extend App Props with Emotion
type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

// ** Pace Loader
if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })

  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })

  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

const ThemeComponent = dynamic(
  async () => {
    const mod = await import('src/@core/theme/ThemeComponent')

    return mod.default
  },
  { ssr: false }
)

// ** Configure JSS & ClassName
const App = (props: ExtendedAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const [loading, setLoading] = React.useState(true)

  // const [locale, setLocale] = React.useState(getLanguageFromCookie())
  const [locale] = React.useState(getLanguageFromCookie())

  React.useEffect(() => {
    window.addEventListener('DOMContentLoaded', () => {
      setLoading(true)
    })

    const handleRouteChangeComplete = () => setLoading(false)

    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    setLoading(false)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [])

  // Variables
  const getLayout =
    Component.getLayout ??
    ((page) => <UserLayoutHorizontal>{page}</UserLayoutHorizontal>)

  return (
    <RecoilRoot>
      <div>
        {loading && (
          <SplashScreen logoPath="/images/logos/bank-indonesia.svg" />
        )}

        <CacheProvider value={emotionCache}>
          <Head>
            <title>{`${themeConfig.templateName}`}</title>

            <meta
              name="description"
              content={`${themeConfig.templateName} – Satu Data Bank Indonesia Tasikmalaya`}
            />

            <meta
              name="keywords"
              content="tasikmalaya, bank indonesia, bi, bank, satu data"
            />

            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>

          <SettingsProvider>
            <SettingsConsumer>
              {({ settings }) => (
                <IntlProvider locale={locale} messages={languages[locale]}>
                  <ThemeComponent settings={settings}>
                    {getLayout(<Component {...pageProps} />)}
                  </ThemeComponent>
                </IntlProvider>
              )}
            </SettingsConsumer>
          </SettingsProvider>
        </CacheProvider>

        <ToastContainer />
      </div>
    </RecoilRoot>
  )
}

export default App
