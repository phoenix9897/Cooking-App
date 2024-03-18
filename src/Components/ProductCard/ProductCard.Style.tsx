import { Dimensions, StyleSheet } from 'react-native'

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    minHeight: deviceSize.height / 5,
    minWidth: deviceSize.width / 3,
    justifyContent: "flex-end",
    resizeMode: "cover",
    overflow: 'hidden',
    borderRadius: 15,
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    bottom: 0,
  },
  title: {
    color: 'white',
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    textAlign: "right",
  }
})
