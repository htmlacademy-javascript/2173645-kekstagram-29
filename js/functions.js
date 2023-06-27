const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength(10, 10);

const isPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  return string === string.split('').reverse('').join('');
};
isPalindrome('иди');

const returnNumbers = (string) => {
  string = String(string).replace(/\D/g, '');
  return parseInt(string, 10);
};
returnNumbers('dffd10');

const getMinutes = (time) => {
  const times = time.split(':');
  return Number(times[0] * 60) + Number(times[1]);
};

const isWorkingDay = (workStart, workEnd, meetingStart, meetingDuration) => {
  const startDay = getMinutes(workStart);
  const endDay = getMinutes(workEnd);
  const startMeeting = getMinutes(meetingStart);
  const endMeeting = startMeeting + meetingDuration;
  if (startMeeting < startDay || endMeeting > endDay) {
    return false;
  }
  return true;
};

isWorkingDay();
