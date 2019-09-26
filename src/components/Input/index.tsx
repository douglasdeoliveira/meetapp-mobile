import React, { forwardRef, Ref } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

interface CustomInput extends TextInputProps {
  icon: string;
}

function Input({ style, icon, ...rest }: CustomInput, ref: Ref<TextInput>) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
}

export default forwardRef(Input);
