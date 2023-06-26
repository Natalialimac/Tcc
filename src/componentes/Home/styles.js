import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#855BAF',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: '15%',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ffcd29',
    borderRadius: 30,
    width: 300,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  logoContainer: {
    marginBottom: '35%',
  },
  logo: {
    width: '80%',
    aspectRatio: 1,
    marginBottom: 10,
  },
  titleContainer: {
    borderRadius: 30,
    alignItems: 'center',
    padding: 20,
    marginBottom: '1%',
    width: '80%',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffcd29',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
