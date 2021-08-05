/* eslint-disable import/no-duplicates */
import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

/* eslint-disable no-bitwise */
export const convertHoursToSeconds = (hour: string): number => {
  const hourParts = hour.split(':');
  const seconds = +hourParts[0] * 60 * 60 + +hourParts[1] * 60 + +hourParts[2];

  return seconds;
};

export const convertSecondsToHours = (seconds: number): string => {
  const hrs = `0${~~(seconds / 3600)}`.slice(-2);
  const mins = `0${~~((seconds % 3600) / 60)}`.slice(-2);
  const secs = `0${~~(seconds % 60)}`.slice(-2);

  return `${hrs}:${mins}:${secs}`;
};

export const formatToAmericanDate = (date: string): Date => {
  const day = date.split('/')[0];
  const month = date.split('/')[1];
  const year = date.split('/')[2];
  const dateFormated = `${year}-${`0${month}`.slice(-2)}-${`0${day}`.slice(
    -2
  )}`;
  return new Date(dateFormated);
};

export const formatToBrazilianDate = (date: string | Date | null): string => {
  if (date) {
    const parsedDate = date instanceof Date ? date : parseISO(date);
    const dateFormated = format(parsedDate, 'dd/MM/yyyy', {
      locale: ptBR,
    });
    return dateFormated;
  }
  return '';
};
