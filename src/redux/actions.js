import { CREATE_DONATE_REQUEST, DONATE } from "./types"

/**
 * Create new donate.
 * @param {Object} newDonateRequest
 * @example <caption>newDonateRequest struct.</caption>
 * const newDonateRequest = {
 *     type: 0 | 1,
 *     photo: '',
 *     name: '',
 *     neededAmount: 0
 *     purpose: '',
 *     description: '',
 *     currencyAccountId: 0,
 *     autorId: 0,
 *     completionType: 0 | 1,
 *     completedDate: Date.now() | 0,
 * };
 */
export const createDonateRequest = (newDonateRequest) => {
    return {
        type: CREATE_DONATE_REQUEST,
        payload: newDonateRequest
    }
}

/**
 * Donate.
 * @param {number} userId
 * @param {number} donateRequestId
 * @param {number} amount min value is 0
 */
export const donate = (userId, donateRequestId, amount) => {
    return {
        type: DONATE,
        payload: { userId, donateRequestId, amount }
    }
}