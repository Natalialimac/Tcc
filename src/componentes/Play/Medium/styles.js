import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#855BAF',
  },
  tonyStyle: {
    top: '50%',
  },
  balloon: {
    bottom: '25%',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  imagesContainer: {
    bottom:"1%",
    flexDirection:'row',
    justifyContent: 'center',             
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  imagesContainerAlt:{
    bottom: "1%",
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
    bottom:'10%'
  },
  questionImage: {
    bottom: '150%',
    left: '50%',
    resizeMode:'contain',
    width: 150,
    height:150
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: '10%',
    right: 20,
    backgroundColor: '#2E86C1',
    padding: 10,
    borderRadius: 10,
  },
  pointsText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  lottieAnimation: {
    width: 30,
    height: '100%',
  },
}); 

export default styles;
