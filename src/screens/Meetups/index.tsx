import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import MeetupCard from '~/components/MeetupCard';
import api from '~/services/api';

import { Container, List } from './styles';

function Meetups({ isFocused }: any) {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function loadAppointments() {
    const response = await api.get('/meetups');

    setMeetups(response.data);
  }

  async function handleSubscribe(id: number) {
    await api.post(`/meetups/${id}/subscriptions/`);
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
              text="Realizar inscrição"
              data={item}
              onSubscribe={() => handleSubscribe(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Meetups.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }: any) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Meetups);
