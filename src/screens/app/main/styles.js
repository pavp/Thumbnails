import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topText: {
    color: '#00acee',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
  },
  bottomText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  imageContainer: {
    width: '90%',
    height: 300,
    backgroundColor: 'gray',
    marginVertical: 16,
    borderRadius: 10
  },
  topContainer: {
    width: '100%',
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  generateText: {
    color: '#00acee',
    fontWeight: 'bold',
    fontSize: 26,
    textAlign: 'center',
    borderRadius: 18,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
  },
  urlCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 25,
  },
  imageCard: {
    flex: 1,
    width: '25%',
    height: 100,
    resizeMode: 'cover'
  },
  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginVertical: 48
  },
  cardText: {
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;