import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
          navigation.navigate('Login');
      }, 3000);
    });
    return (
      <View style={styles.container}>
        <Ionicons name={'medkit'} size={60} color="#fff" />
        <Text style={styles.heading}>Carebow</Text>
      </View>
    );
  };
  
  export default Splash;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6D31ED',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#fff',
    },
  });