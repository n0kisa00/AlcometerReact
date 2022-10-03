import { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Switch, Text, TextInput, Pressable, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import styles, {BasicTheme, DarkTheme} from './styles/style';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';

  
export default function App() {

  const [isdark, setDark] = useState(false);
  const theme = isdark ? DarkTheme : BasicTheme;

  const [result, setResult] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [gender, setGender] = useState('male');

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ]

  function calculate() {

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10
    let gramsLeft = grams - burning * hours;
    let resultMale = gramsLeft / (weight * 0.7)
    let resultFemale = gramsLeft / (weight * 0.6)
    let noWeight = 'Please enter weight.'

    if (weight == 0) {
      Alert.alert(noWeight);
    }


    if (resultFemale < 0) {
      setResult(0);
    } else if (gender === 'female'){
      setResult(resultFemale);
    } else if (gender === 'male') {
      setResult(resultMale);
    }
  }

  function toggleDm() {
    setDark( prev => !prev )
  }

  return (
    <SafeAreaView style={theme.container}>
      <ScrollView>
        <Switch style={theme.switch}
        onChange={toggleDm}
        value={isdark}
        />
        <Text style={theme.title}>Alcometer</Text>
        <Text style={theme.text}>Weight</Text>
          <TextInput keyboardType='numeric' style={theme.input} onChangeText={w=>setWeight(w)}>{weight}</TextInput>
        <Text style={theme.text}>Bottles</Text>
          <NumericInput 
          borderColor='#4593ba' 
          leftButtonBackgroundColor='#5eb8e6' 
          rightButtonBackgroundColor='#5eb8e6' 
          rounded
          onChange={b=>setBottles(b)}> </NumericInput>
        <Text style={theme.text}>Hours</Text>
          <NumericInput
           borderColor='#4593ba' 
           leftButtonBackgroundColor='#5eb8e6' 
           rightButtonBackgroundColor='#5eb8e6' 
           rounded 
           onChange={h=>setHours(h)}> </NumericInput>
        <RadioForm
          style={theme.radio}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}
        />
        <View style={theme.Center}>
        <Text style={theme.result}>{result.toFixed(2)}</Text>
          <Pressable style={theme.button} onPress={calculate} title="Calculate" >
            <Text style={theme.buttonText}>Calculate</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}