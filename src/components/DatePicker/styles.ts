import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin: 0 15px;
`;

export const Button = styled(TouchableOpacity)`
  padding: 5px;
  align-items: center;
  justify-content: center;
`;
