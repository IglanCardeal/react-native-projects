import { useEffect, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'
import { api } from '@/src/services/api'
import { Movie } from '../types'
import { MovieDetails } from '../components/MovieDetails'
import BackToMenu from '../components/BackToMenu'

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('/r-api/?api=filmes')
      setTimeout(() => {
        setMovies(response.data)
        setLoading(false)
      }, 1_000)
    }
    loadMovies()
  }, [])

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#121212" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
        Movies
      </Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <MovieDetails item={item} />}
      />
      <BackToMenu />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
