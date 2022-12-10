import reducer, { increase, decrease, increaseByX } from './counterSlice';

describe('counterSlice', () => {

    it("should return the initial state", () => {
        expect(reducer(undefined, { type: undefined })).toEqual({
            count: 0
        })
    })

    it("increase by one when dispatching increase action", () => {
        const previousState = { count: 5 };
        expect(reducer(previousState, increase())).toEqual({
            count: 6
        })
    })

    it("decrease by one when dispatching decrease action", () => {
        const previousState = { count: 5 };
        expect(reducer(previousState, decrease())).toEqual({
            count: 4
        })
    })

    it("increase by 5 when dispatching increaseByX action sending 5 as payload", () => {
        const previousState = { count: 5 };
        expect(reducer(previousState, increaseByX(5))).toEqual({
            count: 10
        })
    })

    it("decrease by 5 when dispatching increaseByX action sending -5 as payload", () => {
        const previousState = { count: 15 };
        expect(reducer(previousState, increaseByX(-5))).toEqual({
            count: 10
        })
    })

})
