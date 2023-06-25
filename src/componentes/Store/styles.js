import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#855BAF',
    paddingTop: '30%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  storeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 50
  },
  scrollContainer: {
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C6C5FD',
    borderRadius: Dimensions.get('window').width * 0.3,
    marginBottom: 20,
  },
  itemImage: {
    aspectRatio: 1,
    marginRight: 10,
  },
  itemTextContainer: {
    backgroundColor: '#250546',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    height: Dimensions.get('window').height * 0.15,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 25,
    color: 'white',
  },
  itemStars: {
    fontSize: 14,
    color: 'white',
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
