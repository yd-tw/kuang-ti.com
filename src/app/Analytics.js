'use client'

import { useEffect } from 'react'
import ReactGA from 'react-ga'

const GA_MEASUREMENT_ID = 'G-ZZXCTQ4C09'

const Analytics = () => {
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID)

    // 記錄初始頁面載入
    ReactGA.pageview(window.location.pathname + window.location.search)
    
    // 監聽路由變化並記錄頁面視圖
    const handleRouteChange = (url) => {
      ReactGA.pageview(url)
    }

    window.addEventListener('hashchange', () => {
      handleRouteChange(window.location.pathname + window.location.search)
    })

    return () => {
      window.removeEventListener('hashchange', () => {
        handleRouteChange(window.location.pathname + window.location.search)
      })
    }
  }, [])

  return null
}

export default Analytics