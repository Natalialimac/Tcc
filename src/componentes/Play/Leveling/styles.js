import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#855BAF',
  },
  tonyStyle: {
    marginBottom: 20,
  },
  balloon: {
    position: 'flex',
    top: 0,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  imagesContainerAlt: {
    //flexDirection: 'row-reverse',
    //justifyContent: 'space-between',
    //alignItems: 'center',
    //marginHorizontal: 20,
    marginBottom: 20,
    //transform: [{ rotate: '90deg' }],
  },
  imageButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    borderRadius: 10,
  },
  feedbackText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
