function century(year) {
  if (year % 100 === 0) {
    return year / 100;
  } else {
    return Math.floor(year / 100) + 1;
  }
}

century(1601);
