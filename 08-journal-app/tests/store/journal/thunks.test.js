import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";


describe('Pruebas en JournalThunks', () => { 

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => jest.clearAllMocks() );

    test('startNewNote debe de crear una nueva nota en blanco', async() => { 
        const uid = 'TESTUID'
        getState.mockReturnValue( { auth: { uid: uid} } );

        await startNewNote()(dispatch, getState );

        expect( dispatch ).toHaveBeenCalledWith( savingNewNote() );
        expect( dispatch ).toHaveBeenCalledWith( addNewEmptyNote({
            "body": "",
            "date": expect.any( Number ),
            "id": expect.any( String ),
            "imageUrls": [],
            "title": "",
        }) );
        expect( dispatch ).toHaveBeenCalledWith( setActiveNote({
            "body": "",
            "date": expect.any( Number ),
            "id": expect.any( String ),
            "imageUrls": [],
            "title": "",
        }) );

        //Eliminar de firebase

        const collectionRef = collection( FirebaseDB, `${uid}/journal/notes` );
        const docs = await getDocs( collectionRef );

        const deletePromises = [];
        docs.forEach( doc => deletePromises.push( deleteDoc( doc.ref ) ));

        await Promise.all( deletePromises );

    })


})