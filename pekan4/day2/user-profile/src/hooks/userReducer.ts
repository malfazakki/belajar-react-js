import type { UserProfileInterface } from "@/interface/userProfile";

type UserAction =
	| { type: "UPDATE_PROFILE"; payload: Partial<UserProfileInterface["personalInfo"]> }
	| { type: "UPDATE_PREFERENCES"; payload: Partial<UserProfileInterface["preferences"]> }
	| { type: "INCREMENT_LOGIN_COUNT" }
	| { type: "RESET" };

export const initialUser: UserProfileInterface = {
	id: 1,
	personalInfo: {
		firstName: "John",
		lastName: "Doe",
		email: "john.doe@example.com",
	},
	preferences: {
		theme: "light",
		notifications: true,
		language: "id",
	},
	stats: {
		loginCount: 0,
		lastLogin: new Date(),
		accountCreated: new Date(),
	},
};

export function userReducer(state: UserProfileInterface, action: UserAction): UserProfileInterface {
	switch (action.type) {
		case "UPDATE_PROFILE":
			return {
				...state,
				personalInfo: { ...state.personalInfo, ...action.payload },
			};
		case "UPDATE_PREFERENCES":
			return {
				...state,
				preferences: { ...state.preferences, ...action.payload },
			};
		case "INCREMENT_LOGIN_COUNT":
			return {
				...state,
				stats: {
					...state.stats,
					loginCount: state.stats.loginCount + 1,
					lastLogin: new Date(),
				},
			};
		case "RESET":
			return initialUser;
		default:
			return state;
	}
}
