import { EmailType } from '../types';
import { EmailActions } from '../actions';

export interface EmailState {
  emails: EmailType[];
}

const initialState: EmailState = {
  emails: [
    {id: 1, from: "jjohnson@gmail.com", message: "greetings"},
    {id: 2, from: "smylavarapu@microsoft.com", message: "here is your license key"}
  ]
}

export const EmailReducer = (state: EmailState = initialState, action: EmailActions): EmailState => {
  switch (action.type) {
    case 'SET_EMAILS':
      return {
        emails: action.payload
      };

    case 'ADD_EMAIL':
      return {
        emails: [...state.emails, action.payload]
      }

    case 'DELETE_EMAIL':
      return {
        emails: state.emails.filter(email => email.id !== action.payload)
      }

    default:
      return state;
  }
}
