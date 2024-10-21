import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../styles'
import { Link } from 'expo-router'

export default function BackToMenu() {
  return (
    <View style={{ margin: 10, alignItems: 'center' }}>
      <TouchableOpacity style={styles.touchButton}>
        <Link href={{ pathname: '/' }} style={{ color: '#fff' }}>
          Back To Menu
        </Link>
      </TouchableOpacity>
    </View>
  )
}
