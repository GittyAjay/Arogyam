import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = (props: { navigation: { addListener: Function, push: Function } }) => {
    React.useEffect(() => {
        props.navigation.addListener("focus", () => {
            props.navigation.push("Medicine")
        })
    })
    return (
        <>
        </>
    )
}

export default index

const styles = StyleSheet.create({})
