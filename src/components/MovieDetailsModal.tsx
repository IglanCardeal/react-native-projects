import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type MovieDetailsModalProps = {
  title: string
  text: string
  onCloseModal: () => void
}

export default function MovieDetailsModal({
  text,
  title,
  onCloseModal,
}: MovieDetailsModalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{title}</Text>
        <Text style={styles.modalText}>{text}</Text>
        <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: '90%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
  },
  modalText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
  },
  closeButton: {
    backgroundColor: '#f25',
    alignItems: 'center',
    padding: 8,
    marginTop: 10,
    alignSelf: 'flex-end',
    borderRadius: 5,
    width: 100,
  },
  closeButtonText: { color: '#fff', fontSize: 16 },
})
