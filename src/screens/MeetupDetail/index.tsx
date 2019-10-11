import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationStackScreenProps } from 'react-navigation-stack';

import Background from '~/components/Background';
import { Meetup } from '~/types/meetup';

import { Container, Description, InfoItem, InfoText, MeetupContent, MeetupImage, MeetupTitle } from './styles';

export default function MeetupDetail({
  navigation,
}: NavigationStackScreenProps) {
  const meetup: Meetup = navigation.getParam('meetup');
  const dateParsed: Date = navigation.getParam('dateParsed');

  return (
    <Background>
      <Container>
        <MeetupImage source={{ uri: meetup.file.url }} />
        <MeetupContent>
          <MeetupTitle>{meetup.title}</MeetupTitle>
          <Description>{meetup.description}</Description>
          <InfoItem>
            <Icon name="event" size={20} color="#999" />
            <InfoText>{dateParsed}</InfoText>
          </InfoItem>
          <InfoItem>
            <Icon name="place" size={20} color="#999" />
            <InfoText>{meetup.location}</InfoText>
          </InfoItem>
          <InfoItem>
            <Icon name="person" size={20} color="#999" />
            <InfoText>{meetup.user.name}</InfoText>
          </InfoItem>
        </MeetupContent>
      </Container>
    </Background>
  );
}
