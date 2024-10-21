import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native'
import { Movie } from '../types'
import { useState } from 'react'
import MovieDetailsModal from './MovieDetailsModal'

type MovieDetailsProps = {
  item: Movie
}

export function MovieDetails({ item }: MovieDetailsProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.nome}</Text>
      <Image style={styles.image} source={{ uri: item.foto }} />
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowModal(true)}
        >
          <Text style={styles.buttonText}>Read more</Text>
        </TouchableOpacity>
      </View>
      <Modal transparent={true} animationType="slide" visible={showModal}>
        <MovieDetailsModal
          title={item.nome}
          text={item.sinopse}
          onCloseModal={() => setShowModal(false)}
        />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#add',
    margin: 15,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    padding: 15,
    textAlign: 'center',
  },
  image: {
    height: 250,
    zIndex: 2,
  },
  buttonArea: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 3,
  },
  button: {
    width: 100,
    backgroundColor: '#09f',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
})
