import { CREATE_DONATE_REQUEST, DONATE } from "../types";

/**
 * @example <caption>Entities.</caption>
 * const donateRequestExample = {
 *     id: 0,
 *     donates: [],
 *     currentAmount: 0,
 * 
 *     photo: '',
 *     name: '',
 *     neededAmount: 0,
 *     purpose: '',
 *     description: '',
 *     currencyAccountId: 0,
 *     autorId: 0,
 *     completionType: 0 | 1,
 *     completedDate: Date.now()
 * };
 * 
 * const currencyAccountExample = {
 *     id: 0,
 *     name: ''
 * };
 * 
 * const autorExample = {
 *     id: 0,
 *     name: ''
 * };
 * 
 * const donateExample = {
 *     id: 0
 *     userId: 0,
 *     amount: 0
 * }
 */
const initialState = {
    donateRequests: []
};

export function donateReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_DONATE_REQUEST:
            const newDonateRequest = {
                ...action.payload,
                id: Date.now(),
                donates: [],
                currentAmount: 0
            }
            return {...state, donateRequests: [ ...state.donateRequests, newDonateRequest ]};
        case DONATE:
            const { userId, donateRequestId, amount } = action.payload;
            return {
                ...state,
                donateRequests: [
                    state.donateRequests.map(donateRequest => {
                        if (donateRequest.id === donateRequestId) {
                            return {
                                ...donateRequest,
                                currentAmount: donateRequest.currentAmount + amount,
                                donates: [
                                    ...donateRequest.donates,
                                    { id: Date.now(), userId, amount }
                                ]
                            }
                        }
                        return donateRequest;
                    })
                ]
            };
        default: return state;
    }
};