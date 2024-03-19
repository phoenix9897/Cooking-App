import { Dimensions, StyleSheet } from "react-native";

const displaySize = Dimensions.get('window');

export default StyleSheet.create({
  container: {

  },
  image: {
    height: displaySize.height / 3,
    width: '100%',
    borderRadius:35,
  },
  headers: {
    borderBottomWidth: 0.5,
  },
  title: {
    color: '#a52a2a',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
  country: {
    color: '#a52a2a',
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 35,
    marginVertical:10,
    textAlign:"right",

  },
  description: {
    color: 'black',
    margin: 15
  },
  button: {
    backgroundColor: '#BF3131',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    textAlign:"center",
    alignItems:"center",
  }
})
