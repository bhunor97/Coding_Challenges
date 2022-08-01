function humanReadable(seconds) {
  let minute = parseInt(seconds / 60);
  let hour = parseInt(minute / 60);
  let remainingMinute = parseInt((seconds - hour * 60 * 60) / 60);
  let remainingSeconds = seconds - hour * 60 * 60 - remainingMinute * 60;

  return `${hour.toString().padStart(2, "0")}:${remainingMinute
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

console.log(humanReadable(86400)); // "12:34:56"

// humanReadable(0), "00:00:00", "humanReadable(0)";
// humanReadable(59), "00:00:59", "humanReadable(59)";
// humanReadable(60), "00:01:00", "humanReadable(60)";
// humanReadable(90), "00:01:30", "humanReadable(90)";
// humanReadable(3599), "00:59:59", "humanReadable(3599)";
// humanReadable(3600), "01:00:00", "humanReadable(3600)";
// humanReadable(45296), "12:34:56", "humanReadable(45296)";
// humanReadable(86399), "23:59:59", "humanReadable(86399)";
// humanReadable(86400), "24:00:00", "humanReadable(86400)";
// humanReadable(359999), "99:59:59", "humanReadable(359999)";
