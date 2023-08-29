export const Highlight = () => {
  return (
    <section className="section section-highlight">
      <div className="container">
        <ul className="highlight-list row">
          <li className="highlight-item col col-6 col-sm-12">
            <div className=" highlight">
              <h4 className="highlight-title">New arrivalsare now in!</h4>
              <a className="highlight-link btn btn-info" href="/">
                SHOW COLLECTION
              </a>
            </div>
          </li>
          <li className="highlight-item col col-3 col-sm-6">
            <div className="highlight">
              <h4 className="highlight-title">Basic t-shirts $29,99</h4>
              <a className="highlight-link btn btn-info" href="/">
                MORE DETAILS
              </a>
            </div>
          </li>
          <li className="highlight-item col col-3 col-sm-6">
            <div className="highlight">
              <span className="badge badge-danger">-50%</span>
              <h4 className="highlight-title">Sale this summer</h4>
              <a className="highlight-link btn btn-info" href="/">
                VIEW ALL
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
