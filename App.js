import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import NumberField from "./src/components/number-field";

export default function App() {
    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [result, setResult] = useState("")

    const sum = () => {
        setResult((prevState) => {
            return parseInt(num1) + parseInt(num2)
        })
    }
    const subs = () => {
        setResult((prevState) => {
            return parseInt(num1) - parseInt(num2)
        })
    }
    const mult = () => {
        setResult((prevState) => {
            return parseInt(num1) * parseInt(num2)
        })
    }
    const div = () => {
        setResult((prevState) => {
            return parseInt(num1) / parseInt(num2)
        })
    }

    return (
        <View style={styles.container}>
            <Text>Calculadora</Text>
            <View style={{
                flexDirection: 'row',
                gap: 12
            }}>
                <NumberField value={num1} onChange={setNum1} label="Número 1"/>
                <NumberField value={num2} onChange={setNum2} label="Número 2"/>
            </View>
            <View>
                {result && <Text>Resultado: {result}</Text>}
            </View>
            <Button title="Sumar" onPress={sum}/>
            <Button title="Restar" onPress={subs}/>
            <Button title="Multiplicar" onPress={mult}/>
            <Button title="Dividir" onPress={div}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:
            '#fff',
        alignItems:
            'center',
        gap:
            12,
        justifyContent:
            'center',
    }
    ,
});
