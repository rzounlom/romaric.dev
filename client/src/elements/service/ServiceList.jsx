import React, { Component } from "react";
import { FiLayers, FiMonitor } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Website Development",
    description: "Personal and Business Websites for reaching the world",
  },
  {
    icon: <FiLayers />,
    title: "Web Application Development",
    description: "Web Applications built for problem-solving and efficiency",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Application Development",
    description:
      "Beatiful and Perfomant Mobile Applications built for both IOS and Android",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/#contact">
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
