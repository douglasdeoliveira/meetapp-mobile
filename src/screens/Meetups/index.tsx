import React, { useEffect, useState } from 'react';
import { showMessage } from 'react-native-flash-message';
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
    try {
      await api.post(`/meetups/${id}/subscriptions/`);

      showMessage({
        message: 'Parabéns!',
        description: 'Inscrição realizada com sucesso',
        type: 'success',
      });
    } catch (error) {
      console.tron.log(error);
      showMessage({
        message: 'Erro!',
        type: 'danger',
      });
    }
  }

  return (
    <Background>
      <Container>
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
