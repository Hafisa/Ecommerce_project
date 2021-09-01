import { StyleSheet, StatusBar } from "react-native"
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  safeAreaView: {
    flex: 1
  },
  mainContainer: {
    flex: 1
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    elevation: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#ed3a3e',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemimage: {
    width: 35, height: 35
  },
  icon: {
    width: 10, height: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  itemContainer: {
    width: '85%',
    marginLeft: '3%',
    justifyContent: 'space-around',
    height: 50,
  },
  itemContent: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  editContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtext: {
    fontSize: 10,
    color: 'gray'
  },
  title2: {
    fontSize: 12,
    fontWeight: '500'
  },
  datatext: {
    fontSize: 12, color: 'green', fontWeight: 'bold'
  },

});
