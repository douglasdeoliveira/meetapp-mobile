import { isAfter, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '~/components/Background';
import MeetupCard from '~/components/MeetupCard';
import api from '~/services/api';
import { Meetup } from '~/types/meetup';

import { Container, List, UnsubscribeButton, WarnText } from './styles';

function Subscriptions({ isFocused }: any) {
  const [meetups, setMeetups] = useState<Meetup[]>([]);
  const [isUnsubscribing, setIsUnsubscribing] = useState<boolean>(false);

  useEffect(() => {
    if (isFocused) {
      loadSubscriptions();
    }
  }, [isFocused]);

  async function loadSubscriptions() {
    const response = await api.get('/subscriptions');

    setMeetups(response.data);
  }

  async function handleUnsubscripe(id: number) {
    try {
      setIsUnsubscribing(true);

      await api.delete(`/subscriptions/${id}`);
      setMeetups(meetups.filter(m => m.id !== id));

      showMessage({
        message: 'Inscrição cancelada com sucesso',
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: 'Erro ao cancelar inscrição!',
        type: 'danger',
      });
    } finally {
      setIsUnsubscribing(false);
    }
  }

  function canUnsubscribe({ date }: Meetup) {
    return isAfter(parseISO(date), new Date());
  }

  return (
    <Background>
      <Container>
        {meetups.length > 0 ? (
          <List
            data={meetups}
            keyExtractor={(item: any) => String(item.id)}
            renderItem={({ item }: any) => (
              <MeetupCard meetup={item.meetup}>
                {canUnsubscribe(item.meetup) ? (
                  <UnsubscribeButton
                    loading={isUnsubscribing}
                    onPress={() => handleUnsubscripe(item.id)}>
                    Cancelar inscrição
                  </UnsubscribeButton>
                ) : (
                  <></>
                )}
              </MeetupCard>
            )}
          />
        ) : (
          <WarnText>Você não possui inscrições em meetups.</WarnText>
        )}
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
