import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#855BAF',
  },
  animation: {
    width: 400,
    height: 400,
    marginBottom: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  message: {
    fontSize: 18,
    marginBottom: 24,
    color: 'white',
  },
  button: {
    backgroundColor: '#2E86C1',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  highlightedButton: {
    backgroundColor: '#FFD700',
    borderWidth: 3, 
    borderColor: '#FFD700',
  },

  disabledButton: {
    opacity: 0.5,
  },
});

export default styles;
