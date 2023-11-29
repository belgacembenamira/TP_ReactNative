/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 29/11/2023 - 11:01:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 29/11/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState, useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ToastManager = ({
  type,
  message,
  icon,
  position,
  duration,
  textColor,
  backgroundColor,
}) => {
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    if (!isToastVisible) {
      return;
    }

    if (Platform.OS === 'ios') {
      StatusBar.setHidden(true);
    }

    const toast = (
      <View
        style={[
          styles.toast,
          {
            backgroundColor: backgroundColor,
            color: textColor,
          },
        ]}
      >
        <Icon name={icon} size={24} color={textColor} />
        <Text style={styles.message}>{message}</Text>
      </View>
    );

    const toastRef = useRef(null);

    toastRef.current.show();

    setTimeout(() => {
      toastRef.current.hide();
    }, duration);

    return () => {
      if (Platform.OS === 'ios') {
        StatusBar.setHidden(false);
      }
    };
  }, [isToastVisible, type, message, icon, position, duration, textColor, backgroundColor]);

  return (
    <View style={styles.container}>
      {isToastVisible && toast}
    </View>
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
  },
  toast: {
    borderRadius: 10,
    padding: 16,
    margin: 16,
  },
  message: {
    fontSize: 16,
  },
};

export default ToastManager;
