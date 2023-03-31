import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    bottom: 50,
    left: 110,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 5
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  searchButton: {
    padding: 2,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDivider: {
    marginBottom: 10,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 15,
  },
  
  cardItemText: {
    
    paddingHorizontal: 15,
  },
});
