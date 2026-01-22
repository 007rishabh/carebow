import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Text,
  } from 'react-native'
  import React, { useState } from 'react'
  
  const PasswordInput = ({
    placeholder = 'Password',
    value,
    setValue,
  }) => {
    const [hidePassword, setHidePassword] = useState(true)
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          value={value}
          onChangeText={setValue}
          secureTextEntry={hidePassword}
          autoCapitalize="none"
        />
  
        <TouchableOpacity
          onPress={() => setHidePassword(!hidePassword)}
          style={styles.eyeButton}
        >
          <Text style={styles.eyeText}>
            {hidePassword ? 'Show' : 'Hide'}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  export default PasswordInput
  
  const styles = StyleSheet.create({
    container: {
      width: '90%',
      height: 50,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      marginVertical: 8,
      backgroundColor: '#fff',
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: '#000',
    },
    eyeButton: {
      paddingHorizontal: 5,
    },
    eyeText: {
      color: '#007AFF',
      fontSize: 14,
      fontWeight: '500',
    },
  })
  