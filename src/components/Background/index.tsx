import { ImageBackground } from 'react-native'
import { ReactNode } from 'react'
import { styles } from './styles'

import backgroundImg from '../../assets/background-galaxy.png'

interface BackgroundProps {
  children: ReactNode
}

export function Background({ children }: BackgroundProps) {
  return (
    <ImageBackground
      style={styles.containers}
      source={backgroundImg}
      defaultSource={backgroundImg}
    >
      {children}
    </ImageBackground>
  )
}
