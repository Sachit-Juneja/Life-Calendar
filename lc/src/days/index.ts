function generatePastBirthdays() {
    const birthYear = 2005 + 1;
    const birthMonth = 2;
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
    }
    // Lots more to be added.  
  };
  
  export { days };