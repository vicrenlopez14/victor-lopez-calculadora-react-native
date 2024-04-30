import {Text, TextInput, View} from "react-native";
import React from "react";

const NumberField = ({
                         label,
                         value,
                         onChange
                     }: {
    label?: string,
    value?: string,
    onChange?: (text: string) => void
}) => {
    return <View style={{
        flexDirection: 'column',
    }}>
        <Text>Número 1</Text>
        <TextInput keyboardType={'numeric'} placeholder="25" value={value} onChangeText={
            (text) => {
                onChange(text)
            }
        }/>
    </View>
}

export default NumberField