import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap: 'wrap',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#855BAF',
  },
  tonyStyle: {
    top: '50%',
    
  },
  balloon: {
    position: 'absolute',
    marginBottom: 20,
    top: 0
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  imagesContainer: {
    position: 'absolute',
    bottom: 5,
    flexDirection:'row',
    justifyContent: 'center',             
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  imageButton: {
    marginHorizontal: '5%',
    marginVertical: '1%', 
  },
  image: {

    borderRadius: 10,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    bottom:'100%'
  },
  questionImage: {
    bottom: '150%',
    left: '50%',
    resizeMode:'contain',
    width: 150,
    height:150
  }
}); 

export default styles;
