function generatePastBirthdays() {
    const birthYear = 2005 + 1;
    const birthMonth = 5;
    const birthDay = 13;
  
    const today = new Date();
    const birthdays: Record<string, { summary: string }> = {};
  
    for (let year = birthYear; year <= today.getFullYear(); year++) {
      const birthday = new Date(year, birthMonth - 1, birthDay);
      if (birthday <= today) {
        const key = `${year}-${String(birthMonth).padStart(2, "0")}-${String(
          birthDay
        ).padStart(2, "0")}`;
        const age = year - birthYear + 1;
        birthdays[key] = {
          summary: `${age}${
            age === 1 ? "st" : age === 2 ? "nd" : age === 3 ? "rd" : "th"
          } Birthday 🎉`,
        };
      }
    }
  
    return birthdays;
  }


  const days: { [key: string]: { url?: string; summary?: string } } = {
    "2005-05-13": { summary: "Graced the world with my presence." },
    ...generatePastBirthdays(),
    "2009-01-02": { summary: "Got myself a duplicate in my younger brother." },
    "2014-10-27": {
      summary: "Moved to Dubai with my family.",
    },
    "2014-10-31": {
      summary: "Started going to Gems Modern Academy for schooling.",
    },
    "2024-06-30": {summary: "Got my UAE Driving license."},
    "2021-07-24": {summary: "Passed Grade 10 with a whopping 98.2%."},
    "2023-07-06": {summary: "Officially survived IB."},
    "2023-08-31": {summary: "Moved into my college dorm (REV) for the first time."},
    "2023-09-01": {summary: "Opened my first bak account at CIBC."},
    "2024-02-01": {summary: "Got interviewed for my first internship at Alpha Data."},
    "2023-07-03": {summary: "Had my first pint of beer with family."},
    "2024-08-16": {summary: "Gambled alongside parents in Vegas to double an insane $6 to $12. Big up MGM Grand."},
    "2024-08-18": {summary: "Finally understood why Grand Canyon is called a wonder of the world."},
    "2021-05-21": {summary: "Unoffically drove my dads Landcruiser for the first time."},
    "2024-09-08": {summary: "Moved into my second year residence in Sage Condos."},
    "2024-09-15": {summary: "Fire alarm went off at my place, not looking so good lmao."},
    "2024-09-11": {summary: "Microvawe lit up thanks to my lovely roommate"},
    "2024-01-17": {summary: "Curtain Rod Incident"}
    // Lots more to be added.  
  };
  
  export { days };