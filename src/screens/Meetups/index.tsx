import React, { useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';
import DatePicker from '~/components/DatePicker';
import MeetupCard from '~/components/MeetupCard';
import api from '~/services/api';
import { ApplicationState } from '~/store';
import { Meetup } from '~/types/meetup';

import { Container, List, SubscribeButton, WarnText } from './styles';

export default function Meetups() {
  const profile = useSelector((state: ApplicationState) => state.user.profile);

  const [currentPage, setPage] = useState<number>(1);
  const [currentDate, setDate] = useState<Date>(new Date());
  const [meetups, setMeetups] = useState<Meetup[]>([]);
  const [isSubscribing, setIsSubscribing] = useState<boolean>(false);

  async function loadMeetups(date: Date, page = 1) {
    const response = await api.get('/meetups', {
      params: { date, page },
    });

    if (date === currentDate) {
      if (response.data.length <= 0) {
        return;
      }

      setPage(page);
      setMeetups([...meetups, ...response.data]);
    } else {
      setPage(1);
      setDate(date);
      setMeetups(response.data);
    }
  }

  async function handleSubscription(id: number) {
    try {
      setIsSubscribing(true);

      await api.post(`/meetups/${id}/subscriptions`);

      showMessage({
        message: 'Parabéns!',
        description: 'Inscrição realizada com sucesso',
        type: 'success',
      });
    } catch (error) {
      showMessage({
        message: 'Erro!',
        type: 'danger',
      });
    } finally {
      setIsSubscribing(false);
    }
  }

  function loadMore() {
    const nextPage = currentPage + 1;

    loadMeetups(currentDate, nextPage);
  }

  function canSubscribe(meetup: Meetup) {
    const isOwner = meetup.user.id === profile.id;

    return !(isOwner || meetup.past);
  }

  return (
    <Background>
      <Container>
        <DatePicker onChangeDate={(date: Date) => loadMeetups(date)} />

        {meetups.length > 0 ? (
          <List
            data={meetups}
            onEndReachedThreshold={0.2}
            onEndReached={loadMore}
            keyExtractor={(item: any) => String(item.id)}
            renderItem={({ item }: any) => (
              <MeetupCard meetup={item}>
                {canSubscribe(item) ? (
                  <SubscribeButton
                    loading={isSubscribing}
                    onPress={() => handleSubscription(item.id)}>
                    Realizar inscrição
                  </SubscribeButton>
                ) : (
                  <></>
                )}
              </MeetupCard>
            )}
          />
        ) : (
          <WarnText>Nenhum meetup encontrado para esta data</WarnText>
        )}
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
