import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        marginBottom: 20,
      },
      background: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        margin: 25,
        padding: 20,
        height:'85%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
      },
      instructions: {
        fontSize: 16,
        color: 'white',
        marginBottom: 10,
        textAlign: 'center',
      },
});

export default styles;
