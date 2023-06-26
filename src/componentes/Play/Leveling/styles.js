import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#855BAF',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    width: "16%",
    height:"7%",
    top: '3%',
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
    top: '9%',
    left:'0%',
    //backgroundColor:'#2E86C1',
  },

  tonyContainer: {
    position: 'absolute',
    top: '24%',
    left: '0%',
    //backgroundColor:'#222AE2',
    
  },
  tonyStyle: {
    position: 'absolute',
  },

  questionText: {
    fontSize: 14,
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
    top: '70%',
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
