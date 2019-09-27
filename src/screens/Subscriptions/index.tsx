import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import MeetupCard from '~/components/MeetupCard';
import api from '~/services/api';

import { Container, List } from './styles';

function Subscriptions({ isFocused }: any) {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function loadAppointments() {
    const response = await api.get('/subscriptions');

    setMeetups(response.data);
  }

  async function handleSubscribe(id: number) {
    await api.delete(`/meetups/${id}/subscriptions/`);
  }

  return (
    <Background>
      <Container>
        {/* <Title>Meu perfil</Title> */}
        <List
          data={meetups}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => (
            <MeetupCard
              text="Cancelar inscrição"
              data={item.Meetup}
              onSubscribe={() => handleSubscribe(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }: any) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
