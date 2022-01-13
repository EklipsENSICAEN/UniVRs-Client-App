import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {BarCodeScanner} from 'expo-barcode-scanner'
import Profil from './Profil'
import {TouchableOpacity} from 'react-native'


const Home = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [data, setData] = useState(null)
    useEffect(() => {
        (async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setData(JSON.parse(data))
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {data &&
            <TouchableOpacity
            onPress={() => navigation.navigate("Profil",{lastname:data.lastname , forename:data.forename , pseudo:data.pseudo, email:data.email , age:data.age })}
            style={styles.button}
            >
              <Text style= {styles.buttonText, {color: 'white', fontSize: 15}}>DETAILS OF THE PASS</Text>
          </TouchableOpacity>
         }
          {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
      );
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    barcodebox : {
        alignItems:"center",
        justifyContent:"center",
        height:300,
        width: 300,
        overflow : 'hidden',
        borderRadius: 30,
        backgroundColor:"tomato"
    },
    mainText : {
        fontSize: 16,
        margin: 20
    },
    button: {
      width: '100%',
      backgroundColor: "#184E77",
      padding: 20,
      borderRadius: 15,
      alignItems: "center",
      marginBottom: 550,
    }
})