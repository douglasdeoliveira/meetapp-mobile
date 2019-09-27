import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { ActionButton, Card, InfoItem, InfoText, MeetupContent, MeetupImage, MeetupTitle } from './styles';

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
}

interface Cards {
  text: string;
  data: Meetup;
  onSubscribe(): void;
}

export default function MeetupCard({ text, data, onSubscribe }: Cards) {
  const dateParsed = useMemo(() => {
    return format(parseISO(data.date), "dd 'de' MMMM', às' HH'h' ", {
      locale: pt,
    });
  }, [data.date]);

  return (
    <Card>
      <MeetupImage
        source={{ uri: `https://api.adorable.io/avatar/100/asdasd.png` }}
      />
      <MeetupContent>
        <MeetupTitle>{data.title}</MeetupTitle>
        <InfoItem>
          <Icon name="event" size={20} />
          <InfoText>{dateParsed}</InfoText>
        </InfoItem>
        <InfoItem>
          <Icon name="place" size={20} />
          <InfoText>{data.location}</InfoText>
        </InfoItem>
        <InfoItem>
          <Icon name="person" size={20} />
          <InfoText>{data.user.name}</InfoText>
        </InfoItem>
        <ActionButton onPress={onSubscribe}>{text}</ActionButton>
      </MeetupContent>
    </Card>
  );
}
