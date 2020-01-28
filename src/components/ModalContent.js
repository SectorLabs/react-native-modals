// @flow

import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { ModalContentProps } from '../type';

const styles = StyleSheet.create({
  content: {
    paddingVertical: 24,
    paddingHorizontal: 18,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
});

const ModalContent = ({
  style,
  children,
}: ModalContentProps) => (
  <View style={[styles.content, style]}>
    {children}
  </View>
);

export default ModalContent;
