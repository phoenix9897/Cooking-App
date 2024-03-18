import { Dimensions, StyleSheet } from "react-native";

const displaySize = Dimensions.get('window');

export default StyleSheet.create({
  container: {

  },
  image: {
    height: displaySize.height / 3,
    width: '100%'
  },
  headers: {
    borderBottomWidth: 0.5,
  },
  title: {
    color: '#a52a2a',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 5
  },
  country: {
    color: '#a52a2a',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
    marginBottom: 5
  },
  description: {
    color: 'black',
    margin: 5
  }
})
