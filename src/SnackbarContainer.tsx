import { View, StyleSheet, ViewStyle } from 'react-native';
import { Portal } from 'react-native-paper';
import * as React from 'react';
import type {
  SnackbarHorizontalPosition,
  SnackbarVerticalPosition,
} from './SnackbarContext';
import { getContainerStyle } from './utils';

export interface SnackbarContainerProps {
  children?: React.ReactNode;
  vertical?: SnackbarVerticalPosition;
  horizontal?: SnackbarHorizontalPosition;
}
const SnackbarContainer: React.FC<SnackbarContainerProps> = ({
  children,
  vertical = 'bottom' as SnackbarVerticalPosition,
  horizontal = 'center' as SnackbarHorizontalPosition,
}) => {
  const rootStyles: ViewStyle = getContainerStyle(vertical, horizontal);

  return (
    <Portal>
      <View pointerEvents="box-none" style={[styles.root, rootStyles]}>
        {children}
      </View>
    </Portal>
  );
};

export default SnackbarContainer;

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
  },
});
