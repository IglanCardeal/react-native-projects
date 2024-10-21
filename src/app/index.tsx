import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, textAlign: 'center' }}>
        Select a project below:
      </Text>
      <TouchableOpacity style={[styles.touchButton]}>
        <Link href={{ pathname: '/movies' }} style={{ color: '#fff' }}>
          Go to Movies
        </Link>
      </TouchableOpacity>
    </View>
  )
}
