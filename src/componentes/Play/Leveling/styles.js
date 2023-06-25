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
    display: 'flex',
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
    marginBottom: 20,
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
