import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const index = () => {
  return (
    <View style={[styles.container,]}>
        <View style={{height: '5%', backgroundColor: 'rgb(252, 222, 0)'}} />
        
        <View style={styles.center}>
            <Image style={styles.profilePic} source={require('../../assets/images/klonoa.jpg')} />
            <Text style={styles.nameText}>Klonoa</Text>

            <View style={styles.buttonRowDirection}>
                <TouchableOpacity style={styles.buttonRow1} onPress={() => Alert.alert('You have pressed me. Wahoo!!')}>
                    <Text>Wahoo!!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonRow1, styles.buttonRow2]} onPress={() => Alert.alert('You have pressed me. Wahoo!!')}>
                    <Text>Manya-!</Text>
                </TouchableOpacity>
            </View>                 
        </View>
        <View style={{height: '2%', backgroundColor: 'rgb(32, 233, 173))'}} />


    </View>
    // <View>
    //     <View style={styles.textContainer}>
    //         <Text style={styles.red}>just red</Text>
    //         <Text style={styles.bigBlue}>just bigBlue</Text>
    //         <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
    //         <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    //     </View>

    //     <View style={styles.textContainer}>
    //         <Button title="Click me!" onPress={() => console.log("Button pressed!")} />
    //     </View>

    //     <View style={{flexDirection: 'column', height: 500}}>
    //         <View style={{flex: 1, backgroundColor: 'red'}} />
    //         <View style={{flex: 2, backgroundColor: 'darkorange'}} />
    //         <View style={{flex: 3, backgroundColor: 'green'}} />
    //     </View>
    // </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    profilePic: {
        width: 200,
        height: 200,
        borderRadius: 10,
        margin: 20
    },

    nameText: {
        color: 'rgb(29, 95, 237)',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20
    },

    buttonRowDirection: {
        flexDirection: 'row',
        justifyContent: 'center',
        // width: '60%'
    },

    buttonRow1: {
        // width: 200,
        // height: 100,
        paddingVertical: 20,
        paddingHorizontal: '75%',
        backgroundColor: 'rgb(118, 162, 255)',
    },

    buttonRow2: {
        backgroundColor: 'rgb(237, 154, 136)'
    }
})

export default index