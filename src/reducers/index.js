export const favCountReducer = (state=[], action) => {
    if(action.type !== 'UPDATE_FAV_COUNT'){
        return;
    }
    //check if fav count for this id exist, if exists, toggle the state, else add
    let newState = {};
    let currentPrdIdState = state.filter((prd) => action.prdid === prd.id);
    let isPrdIdFav = currentPrdIdState.length === 0 ? false : true;
    if(isPrdIdFav){
        newState = {
            id:action.prdid,
            isFav: !(currentPrdIdState.isFav)
        };
    }else {
        newState = {
            id:action.prdid,
            isFav: true
        };
    }
    return[
        ...state,
        newState
    ];
};

