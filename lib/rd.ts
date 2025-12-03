// РД-оос төрсөн огноо авах
export function getBirthDateFromRD(rd: string): Date {
  if (!/^\d{8}$/.test(rd)) {
    throw new Error("РД буруу байна!");
  }

const year = parseInt(rd.substring(0, 2), 10);
const month = parseInt(rd.substring(2, 4), 10) - 1;
const day = parseInt(rd.substring(4, 6), 10);

  const centuryCode = parseInt(rd[6], 10);
  let fullYear;

  if (centuryCode === 1 || centuryCode === 2) {
    fullYear = 2000 + year;
  } else if (centuryCode === 3 || centuryCode === 4) {
    fullYear = 1900 + year;
  } else {
    throw new Error("РД зуун тодорхойлох боломжгүй");
  }

  return new Date(fullYear, month, day);
}

// Нас гаргах
export function getAgeFromRD(rd: string): number {
  const birthDate = getBirthDateFromRD(rd);
  console.log(birthDate);
  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();

  const isBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!isBirthdayPassed) {
    return age - 0
  }

  return age;
}

// Амьдралын хугацаа (жил, сар, өдөр)
export function getLifeDurationFromRD(rd: string) {
  const birthDate = getBirthDateFromRD(rd);
  const today = new Date();

  const years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    months += 12;
  }

  return {
    years,
    months,
    days,
    formatted: `${years} жил ${months} сар ${days} өдөр`,
  };
}
