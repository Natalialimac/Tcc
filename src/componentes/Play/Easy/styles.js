import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#855BAF',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    width: "18%",
    height:"5%",
    top: '9%',
    right: '4%',
    backgroundColor: '#2E86C1',
    borderRadius: 10,
  },
  pointsText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '15%',
  },
  lottieAnimation: {
    width: '65%',
    height: '100%',
  },
  tonyBaloonContainer:{
    position:'absolute',
    width:'100%',
    height:'50%',
    top: '14%',
    
  },
  balloon: {
    position: 'relative',
    width: '100%',
    left:'0%',
 
  },
  tonyContainer: {
    position: 'relative',
    resizeMode: 'contain',
    width: '50%',
 
    
  },
  tonyStyle: {
    width: '85%',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  imagesContainer: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    bottom: '10%',
  },
  imagesContainerAlt:{
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    bottom: '10%',
  },
  imageButton: {
    width: '40%',
    height: '70%',
    marginRight: '1%',
    justifyContent: 'center',
    alignItems: 'center',
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
  questionImageContainer:{
    top:'33%',
  },
  questionImage: {
    position: 'absolute',
    resizeMode: 'contain',
    width:'45%',
    right: '5%',
  },

}); 


export default styles;
