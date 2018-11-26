// 액션 타입 정의
const PLANET_NUM = 'planet/PLANET_NUM';

// 액션 생성 함수 만들기
export const planet_num = (number) => ({
    type : PLANET_NUM,
    number
});

// 모듈의 초기 상태 정의
const initialState = {
    number : 0
};

// 리듀서 만들어서 내보내기
export default function reducer(state = initialState, action){
    console.log(action.number);
    switch(action.type){
        case PLANET_NUM :
            return { number : action.number };
        default :
            return state;
    }
}