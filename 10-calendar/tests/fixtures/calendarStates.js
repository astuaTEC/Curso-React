

export const events = [
    {
        id: '1',
        title: 'Ejercicio de react',
        notes: 'Hay que comprar el pan',
        start: new Date('2023-02-07 18:00:00'),
        end: new Date('2023-02-07 20:00:00')
    },
    {
        id: '2',
        title: 'Ejercicio de node',
        notes: 'Hay que repasar mas',
        start: new Date('2023-01-07 18:00:00'),
        end: new Date('2023-01-07 20:00:00')
    }
]

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [ ...events ],
    activeEvent: null
}

export const calendarWithActiveEventState = {
    isLoadingEvents: true,
    events: [ ...events ],
    activeEvent: { ...events[0] }
}