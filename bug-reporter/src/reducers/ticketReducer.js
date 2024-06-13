export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
        editingTicket: null,
      };
    case "DELETE_TICKET":
      let newState = {
        ...state,
        tickets: state.tickets.filter((ticket) => ticket.id !== action.payload),
      };
      if (state.editingTicket && state.editingTicket.id === action.payload) {
        newState.editingTicket = null;
      }
      return newState;
    case "EDIT_TICKET":
      return { ...state, editingTicket: action.payload };
    case "CANCEL_EDIT":
      return { ...state, editingTicket: null };
    case "SORT_TICKETS":
      return {
        ...state,
        sortPref: action.payload,
      };
    default:
      return state;
  }
}
