import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#855BAF',
  },
  buttonContainer: {
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: '10%',
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ffcd29',
    borderRadius: 30,
    width: '90%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  logoContainer: {
    marginBottom: '35%',
  },
  logo: {
    width: width * 0.8,
    marginBottom: 10,
  },
  titleContainer: {
    position: 'absolute',
    borderRadius: 30,
    alignItems: 'center',
    padding: 20,
    marginBottom: '1%',
    width: '80%',
    top: '5%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffcd29',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
