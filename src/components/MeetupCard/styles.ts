import styled from 'styled-components/native';

import Button from '../Button';

export const Card = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const MeetupImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 150px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const MeetupContent = styled.View`
  padding: 20px;
`;

export const MeetupTitle = styled.Text`
  font-size: 22px;
  margin-bottom: 5px;
`;

export const InfoItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  color: #999999;
  margin-left: 15px;
`;

export const ActionButton = styled(Button)`
  margin-top: 5px;
`;
