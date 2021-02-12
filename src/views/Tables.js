import React from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";


var CLIENT_ID = "710806371011-2r2kmq5nm74tto5cfq6g3b4dttngsr25.apps.googleusercontent.com"
var API_KEY = "AIzaSyAnbCj6dSWEZdEb-PxHfynSF34poArkqOA"
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
var SCOPES = "https://www.googleapis.com/auth/calendar.events"

class Tables extends React.Component {
  
    componentDidMount(prevProps){
     
     this.handleClick();
      
  };
  constructor(props) {
    super(props);
    this.state = {
      eventsList: []
    }
  }
  handleClick = () => {
    var gapi = window.gapi;
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2.getAuthInstance().signIn()
      .then(() => {
        
        // get events
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(response => {
          const events = response.result.items
          eventsList.push(events);
          this.setState({
            eventsList: events
          });
          //console.log(eventsList);
        })
        
    

      })
    })
  }
  render(){
    return(
      <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Meeting Schedule" subtitle="List of meetings" className="text-sm-left" />
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Meeting Name
                  </th>
                  <th scope="col" className="border-0">
                    Date
                  </th>
                  <th scope="col" className="border-0">
                    Start Time
                  </th>
                  <th scope="col" className="border-0">
                    End Time
                  </th>
                  <th scope="col" className="border-0">
                    Meeting Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {eventsList.map(( listValue, index ) => {
                  console.warn(listValue[index].summary);
          return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{listValue[index].summary}</td>
              <td>{listValue[index].start.dateTime.slice(0,10)}</td>
              <td>{listValue[index].start.dateTime.slice(11,19)}</td>
              <td>{listValue[index].end.dateTime.slice(11,19)}</td>
              <td>{<a href={listValue[index].hangoutLink}>Meeting Link</a>}</td>
            </tr>
          );
        })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
    )
  }
}

export default Tables;

