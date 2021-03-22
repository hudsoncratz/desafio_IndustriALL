import Occurrence from '../models/Occurrence';
import eventsView from './eventsView';


export default {
    render(occurrence: Occurrence) {
        return {
            id: occurrence.id,
            title: occurrence.title,
            initDate: occurrence.initDate,
            endDate: occurrence.endDate,
            events: eventsView.renderMany(occurrence.events)
        };   
    },

    renderMany(occurrences: Occurrence[]){
        return occurrences.map(occurrence => this.render(occurrence))
    }
};