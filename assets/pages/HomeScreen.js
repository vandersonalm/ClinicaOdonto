import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAboutClick = () => {
    setEmail(email);
    setPassword(password);
    if(email == '' && password == ''){
      alert('E-mail e senha não informados ❌')
    }else if(email == ''){
      alert('E-mail não informado ❌')
    }else if(password == ''){
      alert('Senha não informada ❌')
    }else{
      navigation.navigate('About', {name: name})
    }
  }

  const handleForgotClick = () => {
    navigation.navigate('Forgot')
    }

  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../img/CLINICAODONTO.jpg')}/>
    <Text style={styles.sistema}>Sistema de Agendamentos</Text>
    <Text style={styles.bemvindo}>Bem vindo(a)! Digite seus dados abaixo.🦷</Text>
    <View>
      <Text>Digite seu Nome</Text>
        
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={t=>setName(t)}
        placeholder='Digite seu Nome'
        placeholderTextColor= '#a1a1a1'
      />
      <Text>E-mail</Text>
      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={t=>setEmail(t)}
        placeholder='Digite seu email'
        placeholderTextColor= '#a1a1a1'
      />
      <Text>Digite sua Senha</Text>
      <TextInput 
        style={styles.input}
        value={password}
        onChangeText={t=>setPassword(t)}
        placeholder='**********'
        placeholderTextColor= '#a1a1a1'
        autoCapitalize= 'none' secureTextEntry/>

      <TouchableOpacity style={styles.esqueciSenha} onPress={handleForgotClick}>
        <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
      </TouchableOpacity>

    <Button title='Entrar' onPress={handleAboutClick}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -100,
    
  },
  input: {
    width: 250,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#ddd',
    borderRadius: 10,
    
  },
  logo: {
    width: 560,
    height: 200,
  },
  sistema:{
    marginTop:-40,
    fontWeight:'bold',
  },
  bemvindo:{
    fontWeight:'bold',
  },
  forgotBtnText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000080',
    marginLeft: 150,
  },
});