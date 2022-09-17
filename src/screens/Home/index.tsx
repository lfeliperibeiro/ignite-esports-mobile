import { styles } from './styles'
import { View, Image, FlatList } from 'react-native'
import logImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading'
import { GameCard, GameCardProps } from '../../components/GameCard'
import { useEffect, useState } from 'react'
import { api } from '../../lib/api'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  useEffect(() => {
    api.get('games').then((response) => {
      setGames(response.data)
    })
  }, [])
  return (
    <View style={styles.containers}>
      <Image source={logImg} style={styles.logo} />
      <Heading
        title={'Encontre seu duo!'}
        subtitle={'Selecione o game que deseja jogar...'}
      />
      <FlatList
        contentContainerStyle={styles.contentList}
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
