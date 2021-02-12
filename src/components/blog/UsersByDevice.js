import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
} from "shards-react";

// This is optional can deldte
import Chart from "../../utils/chart";

//  Logic for pie chart
var events=[{
  "startTime": "2021-02-12T09:00:00+05:30",
  "endTime": "2021-02-12T09:30:00+05:30"
},
{
  "startTime": "2021-02-12T01:30:00+05:30",
  "endTime": "2021-02-12T02:30:00+05:30"
},
{
  "startTime": "2021-02-12T05:30:00+05:30",
  "endTime": "2021-02-12T06:00:00+05:30"
}]

function diff_hours(dt2, dt1) {
  const time1=new Date(dt1);
  const time2=new Date(dt2);
  var diff = (time2.getTime() - time1.getTime()) / 1000;
  diff /= (60 * 60);
  return Math.abs(diff);
};

const total_working_hours=9;

var meetingTime=0;
// eslint-disable-next-line
events.map((event,i) => {
  meetingTime+=diff_hours(event.endTime,event.startTime);
});

var productiveTime=total_working_hours-meetingTime;


class UsersByDevice extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "pie",
      data: this.props.chartData,
      options: {
        ...{
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
        ...this.props.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Productivity</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="220"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
        </CardBody>
      </Card>
    );
  }
}

UsersByDevice.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};



UsersByDevice.defaultProps = {
  title: "Users by device",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [`${meetingTime}`, `${productiveTime}`],
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.5)",
        ]
      }
    ],
    labels: ["Meeting Hours", "Productive Hours", ]
  }
};

export default UsersByDevice;
