import differenceInDays from 'date-fns/differenceInDays';


const raz = differenceInDays(
    new Date(2024, 1, 24, 13, 0),
    new Date(2023, 11, 28, 21, 0)
  );

console.log(raz);

