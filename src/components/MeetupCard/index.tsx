import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Card, InfoItem, InfoText, MeetupContent, MeetupImage, MeetupTitle } from './styles';

interface Meetup {
  id: number;
  title: string;
  description: string;
  location: string;
  date: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
  file: {
    url: string;
    path: string;
  };
}

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

  return (
    <Card>
      <MeetupImage source={{ uri: meetup.file.url }} />
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
