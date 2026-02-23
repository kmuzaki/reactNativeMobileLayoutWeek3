import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const index = () => {
  return (
    <View style={[styles.container,]}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        
        <View style={styles.center}>
            <Image style={styles.profilePic} source={require('../../assets/images/klonoa.jpg')} />
        </View>
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
    }
})

export default index