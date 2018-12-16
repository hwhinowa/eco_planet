// 액션 타입 정의
const PLANET_NUM = 'planet/PLANET_NUM';
const PLANET_DATA = 'planet/PLANET_DATA';

// 액션 생성 함수 만들기
export const planet_num = (number) => ({
    type : PLANET_NUM,
    number
});
export const planet_data = (data) => ({
    type : PLANET_DATA,
    data
});

// 모듈의 초기 상태 정의
const initialState = {
    number : 0,
    data : {
        id : 0,
        hominidae : 0,
        animal : 0,
        plant : 0,
        trash : 0,
        ground : 0,
        ocean : 0
    }
};

// 리듀서 만들어서 내보내기
export default function reducer(state = initialState, action){
    switch(action.type){
        case PLANET_NUM :
            return {
                ...state,
                number : action.number
            };
        case PLANET_DATA : 
            return {
                ...state,
                data : action.data
            };
        default :
            return state;
    }
}