import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import '../styles/pages/create-occurrence.css';
import api from "../serveces/api";

export default function CreateOccurrence() {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [initDate, setInitDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [event, setEvent] = useState('');
  const [arrayEvents, setArrayEvents] = useState([]);
  
  async function handleSubmit(e) {
    e.preventDefault();

    let response = await api.post('occurrences', {title, initDate, endDate});
    let events = arrayEvents.map(event => {
      return {
        occurrenceId: response.data.id,
        eventDescription: event.eventDescription
      }
  
    })
    console.log(events);

    let respnseEvent = await api.post('events', events);

    console.log(respnseEvent);

    history.push('/');
  }

  function handleSelecEvents(e) {
    setArrayEvents([...arrayEvents, {eventDescription: event}]);

    setEvent('');
  }


  return (
    <div id="page-create-occurrence">
      {/* <Sidebar/> */}
      <main>
        <form onSubmit={handleSubmit} className="create-occurrence-form">
          <fieldset>
            <legend>Forulário de Ocorrência</legend>

            <div className="input-block">
              <label htmlFor="title">Título <span>Máximo de 45 caracteres</span> </label>
              <input 
                id="title" 
                value={title}
                maxLength={45}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
    
            <div className="input-block date">
              <div className="initDate">
                <label className="date" htmlFor="initDate">Início</label>
                <input 
                  id="initDate"
                  value={initDate}
                  onChange={e => setInitDate(e.target.value)}
                />
              </div>
              <div className="endDate"> 
                <label htmlFor="initDate">Fim</label>
                <input 
                  id="endDate"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)} />
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="events">Acontecimentos</label>

              <div className="event-container">

                <input type="text" 
                  value={event}
                  onChange={e => setEvent(e.target.value)} 
                  id="event"
                />
                <button type="button" onClick={handleSelecEvents} className="new-event">
                  <FiPlus size={24} color="#FFFFFF"></FiPlus>
                  <h4>Adicionar</h4>
                </button>
              </div>

              {arrayEvents.map(event => {
                  return  <div className="input-block">
                            <label>{event.eventDescription}</label> 
                          </div>
                })}
              
            </div>
          </fieldset>
          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
