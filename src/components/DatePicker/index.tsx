import { addDays, format } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';
import React, { useEffect, useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Button, Container, DateText } from './styles';

interface DatePikerProps {
  style?: any;
  onChangeDate(date: Date): void;
}

export default function DatePicker({ style, onChangeDate }: DatePikerProps) {
  const today = new Date();

  const [date, setDate] = useState<Date>(today);

  useEffect(() => {
    onChangeDate(date);
  }, [date]);

  const dateFormatted = useMemo(
    () => format(date, "dd  'de' MMMM", { locale }),
    [date],
  );

  function handleNext() {
    setDate(addDays(date, 1));
  }

  function handlePrevious() {
    setDate(addDays(date, -1));
  }

  return (
    <Container style={style}>
      <Button onPress={handlePrevious}>
        <Icon name="keyboard-arrow-left" size={36} color="#fff" />
      </Button>

      <DateText>{dateFormatted}</DateText>

      <Button onPress={handleNext}>
        <Icon name="keyboard-arrow-right" size={36} color="#fff" />
      </Button>
    </Container>
  );
}
