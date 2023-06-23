import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#855BAF',
  },
  tonyStyle: {
    top: '55%',
    right: '30%'
  },
  balloon: {
    marginBottom: 20,
    bottom: '35%'
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  imagesContainer: {
    bottom: '10%',
    display: 'flex',
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
}); 

export default styles;
