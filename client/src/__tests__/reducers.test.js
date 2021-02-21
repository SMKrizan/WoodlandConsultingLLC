import {
    UPDATE_MESSAGES,
    UPDATE_TESTIMONIALS,
    // ADD_TESTIMONIALS,
    // REMOVE_TESTIMONIALS,
    // UPDATE_OWNER_INFO
} from '../utils/actions'
import { reducer } from '../utils/reducers';

const initialState = {
    messages: [],
    testimonials: [],
    ownerInfo: {
        ownerName: "Jessica A. Walther",
        ownerEmail: "jess@gmail.com",
        address: "Slinger, WI"
    }
}

test('UPDATE_MESSAGES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_MESSAGES,
        messages: [{}, {}, {}, {}]
    });

    expect(newState.messages.length).toBe(4);
    expect(initialState.messages.length).toBe(0);
});

test('UPDATE_TESTIMONIALS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_TESTIMONIALS,
        testimonials: [{}, {}, {}]
    });

    expect(newState.testimonials.length).toBe(3);
    expect(initialState.testimonials.length).toBe(0);
});

// test('UPDATE_OWNER_INFO', () => {
//     let newState = reducer(initialState, {
//         type: UPDATE_OWNER_INFO,
//         ownerInfo: {
//             ownerName: "Jessica A. Walther",
//             ownerEmail: "woodlandconsultingllc@gmail.com",
//             address: "Slinger, WI"
//         }
//     });

//     expect(newState.ownerInfo.ownerEmail).toEqual("woodlandconsultingllc@gmail.com");
//     expect(initialState.ownerInfo.ownerEmail).toEqual("jess@gmail.com");
// })

