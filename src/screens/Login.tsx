import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import CustomButton from '../components/ui/CustomButton';
import InputField from '../components/ui/InputField';
import PasswordInput from '../components/ui/PasswordInput';
  
  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    // Email validation
    const isEmailValid = useMemo(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
    }, [email]);
  
    // Password validation
    const isPasswordValid = useMemo(() => {
      return password.trim().length >= 6;
    }, [password]);
  
    // Overall form validation
    const isFormValid = isEmailValid && isPasswordValid;
  
    const handleLogin = () => {
      if (!isFormValid) return;
      navigation.navigate('MainTabs', {
        screen: 'Home',
      });
          };
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>CareNest</Text>
  
          <InputField
            placeholder="Enter your email"
            value={email}
            setValue={setEmail}
            keyboardType="email-address"
          />
  
          {!isEmailValid && email.length > 0 && (
            <Text style={styles.errorText}>Enter a valid email</Text>
          )}
  
          <PasswordInput value={password} setValue={setPassword} />
  
          {!isPasswordValid && password.length > 0 && (
            <Text style={styles.errorText}>
              Password must be at least 6 characters
            </Text>
          )}
  
          <CustomButton
            title="Login"
            onPress={handleLogin}
            disabled={!isFormValid}
            btnStyle={{ backgroundColor: !isFormValid ? 'grey' : '#007AFF' }}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.linkText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default Login;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6D31ED',
    },
    innerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 30,
    },
    errorText: {
      width: '90%',
      color: 'red',
      fontSize: 12,
      marginTop: 4,
      marginBottom: 6,
    },
    bottomTextContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    bottomText: {
      fontSize: 14,
      color: '#fff',
    },
    linkText: {
      fontSize: 14,
      color: 'red',
      fontWeight: '600',
      marginLeft: 5,
    },
  });
  