import Event from '../models/Event';

export default {
    render(event: Event){
        console.log(event.occurrenceId)
        return {
            id: event.id,
            eventDescription: event.eventDescription,
        };
    },

    renderMany(events: Event[]){
        return events.map(event => this.render(event))
    }
}