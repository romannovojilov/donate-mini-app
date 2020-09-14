import { CREATE_DONATE_REQUEST, DONATE, SET_TYPE } from "../types";

/**
 * @example <caption>Entities.</caption>
 * const donateRequestExample = {
 *     id: 0,
 *     donates: [],
 *     currentAmount: 0,
 * 
 *     type: 0 | 1
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
    type: 0, // 0 - целевой сбор, 1 - регулярный сбор
    donateRequests: [
        {
            id: 1,
            donates: [{
                id: 1,
                userId: 2,
                amount: 1499
            }],
            currentAmount: 1499,
            photo: 'https://im0-tub-ru.yandex.net/i?id=24db17edf66ec83ee9b500b4dcf59213&n=13&exp=1',
            name: 'Добряши помогают котикам',
            neededAmount: 3000,
            purpose: 'Корм и уход для животных в приюте',
            description: 'Привет-привет, добряш! Я создал это событие, чтобы показать',
            currencyAccountId: 2,
            autorId: 1,
            type: 0,
            completionType: 1,
            completedDate: 1600498653630
        },
        {
            id: 2,
            donates: [{
                id: 2,
                userId: 2,
                amount: 1700
            },{
                id: 3,
                userId: 1,
                amount: 300
            }],
            currentAmount: 2000,
            photo: 'https://proza.ru/pics/2020/04/26/986.jpg',
            name: 'Привет-привет, добряш!',
            neededAmount: 9850,
            purpose: 'Корм и уход для животных в приюте',
            description: 'Привет-привет, добряш! Я создал это событие, чтобы показать',
            currencyAccountId: 1,
            autorId: 3,
            type: 0,
            completionType: 0,
            completedDate: 0
        },
        {
            id: 3,
            donates: [{
                id: 4,
                userId: 3,
                amount: 1700
            },{
                id: 5,
                userId: 1,
                amount: 5300
            }],
            currentAmount: 7000,
            photo: 'http://itd3.mycdn.me/image?id=881848968423&t=20&plc=WEB&tkn=*iqljTbaXzm-Cz8ByJrrnZss8xUg',
            name: 'Корм и уход для животных в приюте!',
            neededAmount: 9850,
            purpose: 'Корм и уход для животных в приюте',
            description: 'Привет-привет, добряш! Я создал это событие, чтобы показать',
            currencyAccountId: 1,
            autorId: 2,
            type: 1,
            completionType: 0,
            completedDate: 0
        }
    ]
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
        case SET_TYPE:
            return { ...state, type: action.payload };
        default: return state;
    }
};