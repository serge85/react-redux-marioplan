const initState = {
    projects: [
        { id: '1', title: 'Help me find peach', content: 'bla bla bla'},
        { id: '2', title: 'Help me find love', content: 'bla bla bla'},
        { id: '3', title: 'Help me find god', content: 'bla bla bla'}
    ]
}

const projectReducer = ( state = initState, action) => {

    switch(action.type){

        case 'CREATE_PROJECT' : console.log('created project', action.project); return state;

        case 'CREATE_PROJECT_ERROR' : console.log('created project error', action.error); return state;
        
        default: return state;
    }
}

export default projectReducer;