export const sortTickets = (tickets, sortPref) => {
    switch (sortPref) {
        case "high-low":
            return [...tickets].sort((a, b) => b.priority - a.priority);
        case "low-high":
            return [...tickets].sort((a, b) => a.priority - b.priority);
        case "a-z":
            return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
        case "z-a":
            return [...tickets].sort((a, b) => b.title.localeCompare(a.title));
        default:
            return tickets;
    }
};