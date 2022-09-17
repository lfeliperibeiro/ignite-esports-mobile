import { styles } from './styles'
import { Image, FlatList } from 'react-native'
import logImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { Background } from '../../components/Background'
import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])
  const navigation = useNavigation()

  function handleGameOpen({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl })
  }

  useEffect(() => {
    api.get('games').then((response) => {
      setGames(response.data)
    })
  }, [])
  return (
    <Background>
      <SafeAreaView style={styles.containers}>
        <Image source={logImg} style={styles.logo} />
        <Heading
          title={'Encontre seu duo!'}
          subtitle={'Selecione o game que deseja jogar...'}
        />
        <FlatList
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleGameOpen(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  )
}
