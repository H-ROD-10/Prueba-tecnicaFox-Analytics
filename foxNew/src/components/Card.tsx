import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

import { Article } from '../interfaces/INews'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface Props {
  item: Article
  handlePress: (url: string) => void
}
export const Card = ({ item, handlePress }: Props) => {
  return (
    <View style={styles.card}>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.footer}>
        <Text style={styles.source}>{item.source.name}</Text>
        <Text style={styles.date}>{new Date(item.publishedAt).toLocaleDateString()}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
      <TouchableOpacity
        onPress={() => handlePress(item.url)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Ver Noticia</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.black
  },
  description: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 10,
    lineHeight: 24
  },
  footer: {
    marginTop: 10,
    marginBottom: 10,
  },
  source: {
    fontSize: 14,
    color: Colors.black,
    marginTop: 10
  },
  date: {
    fontSize: 14,
    color: Colors.black,
    marginTop: 10
  },
  author: {
    fontSize: 14,
    color: Colors.black,
    marginTop: 10
  },
  button: {
    backgroundColor: Colors.black,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
})