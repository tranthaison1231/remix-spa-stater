import { useReducer } from "react";
import { uniq } from "lodash-es";

interface UserState {
  email: string;
  firstName: string;
  lastName: string;
  budget: number;
}

type UserAction =
  | { type: UserActionKind.UpdateEmail; payload: string }
  | { type: UserActionKind.UpdateFirstName; payload: string }
  | { type: UserActionKind.UpdateLastName; payload: string }
  | { type: UserActionKind.UpdateBudget; payload: number };

enum UserActionKind {
  UpdateEmail = "UPDATE_EMAIL",
  UpdateFirstName = "UPDATE_FIRST_NAME",
  UpdateLastName = "UPDATE_LAST_NAME",
  UpdateBudget = "UPDATE_BUDGET",
}

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionKind.UpdateEmail:
      return { ...state, email: action.payload };
    case UserActionKind.UpdateFirstName:
      return { ...state, firstName: action.payload };
    case UserActionKind.UpdateLastName:
      return { ...state, lastName: action.payload };
    case UserActionKind.UpdateBudget: {
      if (action.payload < 100) return state;
      return { ...state, budget: state.budget - action.payload };
    }
    default:
      return state;
  }
};

export default function UserContainer() {
  const [state, dispatch] = useReducer(userReducer, {
    email: "son.tran@gmail.com",
    firstName: "Son",
    lastName: "Tran",
    budget: 1000,
  });

  console.info(import.meta.env.VITE_API_URL);

  return (
    <div className="bg-white p-8 lg:p-12 lg:text-lg">
      <h1 className="text-2xl font-bold mb-4">User</h1>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: UserActionKind.UpdateEmail,
              payload: e.target.value,
            })
          }
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-2">
          First name
        </label>
        <input
          type="text"
          id="firstName"
          value={state.firstName}
          onChange={(e) =>
            dispatch({
              type: UserActionKind.UpdateFirstName,
              payload: e.target.value,
            })
          }
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-2">
          Last name
        </label>
        <input
          type="text"
          id="lastName"
          value={state.lastName}
          onChange={(e) =>
            dispatch({
              type: UserActionKind.UpdateLastName,
              payload: e.target.value,
            })
          }
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="budget" className="block mb-2">
          Budget
        </label>
        <input
          type="number"
          id="budget"
          value={state.budget}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        className="bg-blue-500 text-white p-2 rounded w-full"
        type="button"
        onClick={() =>
          dispatch({ type: UserActionKind.UpdateBudget, payload: 100 })
        }
      >
        Buy
      </button>
    </div>
  );
}
