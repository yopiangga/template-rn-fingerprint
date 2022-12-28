import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import FingerprintScanner from 'react-native-fingerprint-scanner';

export default function BiometricPopup(props) {
  useEffect(() => {
    handleFinger();
  }, []);

  async function handleFinger() {
    try {
      const logic = await FingerprintScanner.authenticate({
        description: 'Scan your fingerprint on the device scanner to continue',
      });
      console.log(logic);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>BiometricPopup</Text>
    </View>
  );
}
