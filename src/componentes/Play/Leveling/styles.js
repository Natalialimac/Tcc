import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
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
  balloon: {
    position: 'absolute',
    top: '15%',
    left:'0%',
    //backgroundColor:'#2E86C1',
  },

  tonyContainer: {
    position: 'absolute',
    width: '50%',
    top: '30%',
    //backgroundColor:'#FF2AE2',
    
  },
  tonyStyle: {
    width: '85%',
    //backgroundColor:'#AA2AE2',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    bottom: '5%',
    //backgroundColor:'#F4A75C',
  },

  imageButton: {
    width: '32%',
    height: '65%',
    marginRight: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor:'#222AE2',
    
  },
  image: {
  },
});

export default styles;
