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
    bottom: 180,
  },
  button: {
    backgroundColor: '#FFED46',
    borderRadius: 30,
    width: 300,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  logo: {
    flex: 1,
    resizeMode: 'cover',
  },
 /*  titleContainer: {
    marginTop: '20%',
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#E1F5FE', // Cor de fundo bonitinha
    padding: 10, // Adicione algum espaçamento interno para melhorar a aparência
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  }, */
});

export default styles;
