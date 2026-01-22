import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native'
  import React from 'react'
  
  const CustomButton = ({
    title,
    onPress,
    loading = false,
    disabled = false,
    btnStyle
  }) => {
    return (
      <TouchableOpacity
        style={[
          styles.button,
           btnStyle ,
          (disabled || loading) && styles.disabled,
        ]}
        onPress={onPress}
        activeOpacity={0.7}
        disabled={disabled || loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={[styles.text]}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    )
  }
  
  export default CustomButton

  const styles = StyleSheet.create({
    button: {
      width: '90%',
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      backgroundColor:"#007AFF"
    },
    text: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
    },
    disabled: {
      opacity: 0.6,
    },
  })
  
  