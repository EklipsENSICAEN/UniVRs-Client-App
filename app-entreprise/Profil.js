import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import {Avatar, Title} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Profil({ route, navigation }) {
    console.log(route.params);
    
    const {pseudo, lastname, email, age, forename} = route.params
    return (
        <SafeAreaView style={styles.container}>
            <View style={{width:'100%'}}>
                <Image
                source={require('./assets/univrs.png')}
                style={{height:300,width:'100%'}}
            />
            </View>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image
                        source={{
                            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                        }}
                        size={80}
                    >
                    </Avatar.Image>
               
                <View style={{marginLeft: 20}}>
                    <Title style={[styles.title,{marginTop:30,marginBottom:5}]}>{pseudo}</Title>
                </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="rename-box" size={50} color='#000' />
                    <Text style={{color:'#000', marginLeft: 20 ,marginTop: 10, fontSize:20}} >{forename} {lastname}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" size={50} color='#000' />
                    <Text style={{color:'#000', marginLeft: 20 ,marginTop: 10, fontSize:20}} >{email}</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="cake" size={50} color='#000' />
                    <Text style={{color:'#000', marginLeft: 20 ,marginTop: 15, fontSize:20}} >{age} ans</Text>
                </View>
            </View>
            <View style={{backgroundColor:"green", height:100, display:"flex", justifyContent: "center", alignItems: "center"}}>
                <Text style = {{color:"white", fontWeight:"bold", fontSize:30}}>PASS VALID</Text>
            </View>
        </SafeAreaView>
        
    )
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#6fa8dc'
    },
    userInfoSection: {
        display: 'flex',
        paddingHorizontal: 30,
        marginBottom: 25,
        justifyContent:"center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10
    }
})
