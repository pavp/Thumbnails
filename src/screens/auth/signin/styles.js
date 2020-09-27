import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 16
  },
  input: {
    width: '90%',
    backgroundColor: '#20242A',
    color:'white',
    padding: 15,
    fontSize: 18,
    minHeight: 50,
    borderColor: '#20242A',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 16,
  },
});

export default styles;