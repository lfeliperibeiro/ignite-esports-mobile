import { styles } from './styles'
import { Text, View, ViewProps } from 'react-native'

interface HeaderProps extends ViewProps {
  title: string
  subtitle: string
}
export function Heading({ title, subtitle, ...rest }: HeaderProps) {
  return (
    <View style={styles.containers} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}
