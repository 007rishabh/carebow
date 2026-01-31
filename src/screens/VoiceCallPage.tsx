import { useNavigation } from '@react-navigation/native';
import {
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
  ZegoUIKitPrebuiltCall,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Adjust this to your actual navigation type if you have one
interface VoiceCallPageProps {
  navigation: {
    popTo: (routeName: string) => void;
  };
}

// You’ll want to replace these with real values or props
const yourAppID: number = 0;
const yourAppSign: string = '';
const userID: string = '';
const userName: string = '';
const callID: string = '';

const VoiceCallPage: React.FC<VoiceCallPageProps> = (props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={1781669339}
        appSign={'b3fcf00b09dc71fa69f0e1d021c7c7f30327a5809248e6e83d24f87cd241a478'}
        userID={'12345'}
        userName={'Jhon'}
        callID={'9412864328'}
        config={{
          // You can also use:
          // ONE_ON_ONE_VOICE_CALL_CONFIG
          // GROUP_VIDEO_CALL_CONFIG
          // GROUP_VOICE_CALL_CONFIG
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onCallEnd: (callID: string, reason: unknown, duration: number) => {
            // If you're using React Navigation 6, use navigate instead of popTo
            navigation.navigate('Home')
            // props.navigation.popTo('TodayScreen');
          },
        }}
      />
    </View>
  );
};

export default VoiceCallPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
