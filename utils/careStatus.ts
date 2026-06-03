const careStatus = (lastContact: Date | null, followUpDate: Date) => {
  if (!lastContact) return "No Contact";

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysBetweenContacts = (followUpDate.getTime() - lastContact.getTime()) / msPerDay;
  const daysUntilFollowUp = (followUpDate.getTime() - Date.now()) / msPerDay;

  if (daysBetweenContacts <= 2) {
    return "Crisis";
  } else if (daysUntilFollowUp >= 0 && daysUntilFollowUp < 7) {
    return "Check-in Soon";
  } else if (daysUntilFollowUp < 0) {
    return "Overdue";
  } else {
    return "Active";
  }
};

export default careStatus;
