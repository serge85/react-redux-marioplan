export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database

    const firestore = getFirestore();
    console.log('firestore =>', firestore);
    firestore.collection('projects').add({
        ...project,
        authorFirstName: 'net',
        authorLastName: 'Ninja',
        authorId: 123456,
        createdAt: new Date()
    }).then( () => {
        dispatch({
            type: 'CREATE_PROJECT', project
        })
    }).catch((err) => {
        dispatch({
            type: 'CREATE_PROJECT_ERROR', err
        })
    })

    //dispatch({ type: "CREATE_PROJECT",project: project});
  };
};
