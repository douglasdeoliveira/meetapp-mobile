import { FlatList, Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === 'ios' ? '90px' : '65px'};
`;

export const List = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const WarnText = styled.Text`
  color: #fff;
  font-size: 18px;
  align-self: center;
  margin-top: 30px;
`;

export const SubscribeButton = styled(Button)`
  margin-top: 15px;
`;
