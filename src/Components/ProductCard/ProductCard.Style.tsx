import {StyleSheet} from "react-native";

export default StyleSheet.create({
  Image: {
    width:100,
    minHeight:100,
    resizeMode:"contain",
    backgroundColor:"white"
  },
  Price: {
    textAlign:'right',
    fontSize:14,
    fontStyle:'italic',
  },
  Title: {
    fontWeight: 'bold',
    fontSize:22,
  },
  Body: {
    flex: 1,
    padding:5,
    justifyContent:'space-between'
  },
  Container: {
    backgroundColor: '#e0e0e0',
    borderColor: '#bdbdbd',
    borderWidth:1,
    margin: 10,
    flexDirection: 'row'
  },
  image: {
    width:50,
    height:50,
    resizeMode:"contain",
  }

});
