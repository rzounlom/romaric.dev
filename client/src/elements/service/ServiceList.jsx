import React, { Component } from "react";
import { FiLayers, FiMonitor, FiLayout } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiLayout />,
    title: "Website Development",
    description: "Personal and Business Websites",
  },
  {
    icon: <FiLayers />,
    title: "Web Application Development",
    description: "Web Applications that solve problems.",
  },
  {
    icon: <FiMonitor />,
    title: "Mobile Application Development",
    description: "Mobile Applications for both IOS and Android.",
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
