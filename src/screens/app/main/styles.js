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
    margin: 8
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
    resizeMode: 'cover',
    borderRadius: 10
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
    resizeMode: 'cover',
    borderRadius: 10,
    aspectRatio: 1,
    margin: 8,
  },
  cardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginVertical: 48,
  },
  cardText: {
    color: '#0645AD',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%'
  },
});

export default styles;