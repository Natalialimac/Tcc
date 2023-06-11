import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#855BAF',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  tonyStyle:{
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height:200
    
  }
}); 

export default styles;
