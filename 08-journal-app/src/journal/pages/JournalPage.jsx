import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
    return (
        <JournalLayout>

            {/* <Typography>Ea non mollit ex aliqua fugiat eiusmod sit mollit aliqua esse. Exercitation nulla et mollit magna ex tempor reprehenderit sint magna id. Fugiat do ex magna elit elit ea in sint ea magna incididunt consequat irure ipsum.</Typography> */}

            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                size="large"
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9},
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{fontSize: 30}}/>

            </IconButton>

        </JournalLayout>
    )
}