export const isClient = typeof window !== 'undefined'

function initDayArray(){
  const startDate = new Date('2020-08-01');
  const endDate = new Date('2024-07-18');

  let dayArray = []
  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    dayArray.push({
      year: d.getFullYear(),
      month: d.getMonth()+1,
      day: d.getDate(),
      distance: 0,
      extra: ''
    })
  }
  console.log(dayArray, 'dayArray');
  return dayArray
}

export {
  initDayArray
}
