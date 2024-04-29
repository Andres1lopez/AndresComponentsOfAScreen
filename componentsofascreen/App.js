import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
       <View style={styles.container}>
      
      <Text style={styles.Text} >                                                    Navbar</Text>
      <StatusBar style='auto' />
    </View>
    <View style={styles.container2}>
      
      <Text style={styles.Text2}>Image/video</Text>
      <StatusBar style="auto" />
    </View>
    <View style={styles.container3}>
      
      <Text  style={styles.Text3} >section 2</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.container4}>
      
      <Text  style={styles.Text4}  >Footer</Text>
      <StatusBar style="auto" />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'stretch',
    justifyContent: 'center',
    height:'auto',
    
  },
  container2: {
      flex: 3,
    backgroundColor: 'green',
    alignItems:'center',
    justifyContent: 'space-around',
    
  },

  container3: {
    flex: 3,
    backgroundColor: 'blue',
    alignItems:'center',
    justifyContent: 'center',
    
  },

  container4: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems:'center',
    justifyContent: 'center',
    height:'20px'
    
  },

  Text:{
    color:'white',
    fontSize:15
  },
  Text2:{
    color:'yellow',
    fontSize:50
  },

  Text3:{
    color:'red',
    fontSize:45
  },
  Text4:{
    color:'black',
    fontSize:20
  }



});
