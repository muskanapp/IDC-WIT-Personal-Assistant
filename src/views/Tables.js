import React from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Hackathon Kick Start</td>
                  <td>2020-06-2</td>
                  <td>11AM</td>
                  <td>2PM</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hackathon Submission</td>
                  <td>2020-06-6</td>
                  <td>6PM</td>
                  <td>8PM</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Tables;
