const initialState = {
    glassList: [
        
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './image/glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },

        { id: 2, price: 50, name: 'GUCCI G8759H', url: './image/glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './image/glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './image/glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 5, price: 30, name: 'PRADA P8750', url: './image/glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700', url: './image/glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750', url: './image/glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 8, price: 30, name: 'FENDI F8500', url: './image/glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 9, price: 30, name: 'FENDI F4300', url: './image/glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    ],
    selectedGlass: {},
}
const glassReducer = (state = initialState, action) =>{
    switch(action.type){

        case 'SELECT_GLASS':{
            return {...state, selectedGlass: action.value}
        }

        default:
            return state
    }
}

export default glassReducer;