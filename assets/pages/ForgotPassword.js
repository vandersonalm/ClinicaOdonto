import  React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import { useNavigation, useRoute,  } from '@react-navigation/native'

export default function AboutScreen() {
  const navigation = useNavigation()

  const [newPassword, setNewPassword] = useState('')  
  const [confPassword, setConfPassword] = useState('')  

  const route = useRoute()
  const name = route.params?.name

  const handleHomeClick = () => {
    navigation.goBack()
  }

  const handleNewPasswordButton = () => {
    if(newPassword == confPassword) {
      alert('Senha Alterada com Sucesso ✔️')
    }
    else{
      alert('Senha Alterada sem Sucesso ✔️')
    }
  }

  return (
    <View style={styles.container}>
    <Text style={styles.odonto}>Clínica Odontológica 🦷</Text>
    <Text>Esqueceu sua senha? Não se preocupe vamos te ajudar!</Text>

    
            <Text style={styles.senha}>Nova senha</Text>
            <TextInput 
              style={styles.input2}placeholder= '*********' secureTextEntry
              value={newPassword}
              onChangeText={text => setNewPassword(text)}
            />
    

    
            <Text style={styles.confSenha}>Confirmar senha</Text>
            <TextInput 
              style={styles.input2}placeholder= '*********' secureTextEntry
              value={confPassword}
              onChangeText={text => setConfPassword(text)}
            />
    

      
      <TouchableOpacity style={styles.button}>
          <Button title='Confirmar senha' color='#000080'  onPress={handleNewPasswordButton}/>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  odonto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000080'
  },
  button: {
    width: 350,
    marginTop: 10,
  },
  senha: {
    fontWeight: 'bold',
    color: '#000080',
    alignItems: 'center',
    width: '350',
    height: 50,
    marginRight: 265,
    fontSize: 15,
    marginTop: 50,
  },
  input2:{
    color: '#999',
    width: 350,
    padding: 10,
    marginVertical: 10,
    fontSize: 15,
    backgroundColor: '#ddd',
    borderColor: '#000080',
    marginTop: -20
  },
  confSenha: {
    fontWeight: 'bold',
    color: '#000080',
    alignItems: 'center',
    width: '350',
    height: 50,
    marginRight: 230,
    fontSize: 15,
  },
})