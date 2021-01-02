import React, { Component } from "react";

export const PortfolioListContent = [
  {
    image: "image-1",
    category: "Development",
    title: "Coming Soon",
    siteUrl: "https://www.google.com",
  },
  {
    image: "image-2",
    category: "Development",
    title: "Coming Soon",
    siteUrl: "https://www.google.com",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Coming Soon",
    siteUrl: "https://www.google.com",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Coming Soon",
    siteUrl: "https://www.google.com",
  },
  {
    image: "image-3",
    category: "Development",
    title: "Coming Soon",
    siteUrl: "https://www.google.com",
  },
  {
    image: "image-4",
    category: "Development",
    title: "Coming Soon",
    siteUrl: "https://www.google.com",
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href="/portfolio-details">{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a
                      className="rn-btn"
                      href={value.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
