import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import ru from "date-fns/locale/ru";
import React, { useState } from 'react'
import { CalendarBlock } from './Calendar.styled';

export default function CalendarContent({selected, setSelected}) {

    // const [selected, setSelected] = useState("");

    let footer = <p>Выберите день.</p>;
    if (selected) {
      footer = <p>Вы выбрали {format(selected, 'PP', { locale: ru })}.</p>;
    }
    return (
      <CalendarBlock
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
    );
  }
