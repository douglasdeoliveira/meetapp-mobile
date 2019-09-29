import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import NavigationService from '~/services/navigation';
import { Meetup } from '~/types/meetup';

import { Card, InfoItem, InfoText, MeetupContent, MeetupImage, MeetupTitle } from './styles';

interface Cards {
  meetup: Meetup;
  children?: any;
}

export default function MeetupCard({ meetup, children }: Cards) {
  const dateParsed = useMemo(() => {
    return format(parseISO(meetup.date), "dd 'de' MMMM', às' HH'h' ", {
      locale: pt,
    });
  }, [meetup.date]);

  function navigate() {
    NavigationService.navigate('MeetupDetail', {
      meetup,
      dateParsed,
      children,
    });
  }

  return (
    <Card>
      <TouchableOpacity onPress={navigate}>
        <MeetupImage source={{ uri: meetup.file.url }} />
      </TouchableOpacity>
      <MeetupContent>
        <MeetupTitle>{meetup.title}</MeetupTitle>
        <InfoItem>
          <Icon name="event" size={20} />
          <InfoText>{dateParsed}</InfoText>
        </InfoItem>
        <InfoItem>
          <Icon name="place" size={20} />
          <InfoText>{meetup.location}</InfoText>
        </InfoItem>
        <InfoItem>
          <Icon name="person" size={20} />
          <InfoText>{meetup.user.name}</InfoText>
        </InfoItem>

        {children}
      </MeetupContent>
    </Card>
  );
}
