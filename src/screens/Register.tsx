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
  
  const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();
    // Validations
    const isNameValid = useMemo(() => name.trim().length >= 2, [name]);
  
    const isEmailValid = useMemo(() => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email.trim());
    }, [email]);
  
    const isPasswordValid = useMemo(() => password.length >= 6, [password]);
  
    const doPasswordsMatch = useMemo(
      () => password === confirmPassword && confirmPassword.length > 0,
      [password, confirmPassword],
    );
  
    const isFormValid =
      isNameValid && isEmailValid && isPasswordValid && doPasswordsMatch;
  
    const handleRegister = () => {
      if (!isFormValid) return;
  
      console.log({
        name,
        email,
        password,
      });
    };
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Create Account</Text>
  
          <InputField placeholder="Full Name" value={name} setValue={setName} />
          {!isNameValid && name.length > 0 && (
            <Text style={styles.errorText}>
              Name must be at least 2 characters
            </Text>
          )}
  
          <InputField
            placeholder="Email"
            value={email}
            setValue={setEmail}
            keyboardType="email-address"
          />
          {!isEmailValid && email.length > 0 && (
            <Text style={styles.errorText}>Enter a valid email</Text>
          )}
  
          <PasswordInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          {!isPasswordValid && password.length > 0 && (
            <Text style={styles.errorText}>
              Password must be at least 6 characters
            </Text>
          )}
  
          <PasswordInput
            placeholder="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          {!doPasswordsMatch && confirmPassword.length > 0 && (
            <Text style={styles.errorText}>Passwords do not match</Text>
          )}
  
          <CustomButton
            title="Register"
            onPress={handleRegister}
            disabled={!isFormValid}
            btnStyle={{
              backgroundColor: isFormValid ? '#007AFF' : 'grey',
            }}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.linkText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default Register;
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
      fontSize: 26,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 25,
    },
    errorText: {
      width: '90%',
      color: 'red',
      fontSize: 12,
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
  