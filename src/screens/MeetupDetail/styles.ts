import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 65px;
`;

export const MeetupImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 150px;
`;

export const MeetupContent = styled.View`
  padding: 20px;
`;

export const MeetupTitle = styled.Text`
  font-size: 22px;
  margin-bottom: 15px;
  color: #fff;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-bottom: 25px;
`;

export const InfoItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
`;

export const InfoText = styled.Text`
  font-size: 18px;
  margin-left: 15px;
  color: #999;
`;
