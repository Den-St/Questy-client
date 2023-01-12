import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../containers/Layout'
import { setupStore } from '../store';
import { Provider } from 'react-redux';
import { AuthProvider } from '../containers/AuthProvider';
import { PropsWithChildren, useEffect, useState } from 'react';

const store = setupStore();


export default function App({ Component, pageProps }: AppProps) {
  return <HydratProvider>
  <Provider store={store}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider></HydratProvider>
}
const HydratProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <>
     {children}
    </>
  )
}