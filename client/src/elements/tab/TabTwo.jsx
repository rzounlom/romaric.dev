import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Experience",
      tab3 = "Education";
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/#service">Website Development</a>
                          Building Websites for business and individuals so they
                          can reach the world.
                        </li>
                        <li>
                          <a href="/#service">Web Application Development</a>
                          Building Web Applications for business and individuals
                          to help solve problems business problems or increase
                          efficiancy.
                        </li>
                        <li>
                          <a href="/#service">Mobile Application Development</a>
                          Building Mobile Applications for business and
                          individuals to help solve problems business problems
                          or increase efficiancy.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Full-stack Engineer
                            <span> - Harmony Healcare IT</span>
                          </a>{" "}
                          2020 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Front-end Engineer<span> - Jaam LLC</span>
                          </a>{" "}
                          2020 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Freelance Web Development{" "}
                            <span> - Various Clients </span>
                          </a>{" "}
                          2018 - Current
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            BSc In MIS
                            <span> - Indiana University</span>
                          </a>{" "}
                          2019
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
