import { Link } from 'react-router-dom';

export const Highlight = () => {
  return (
    <section className="section section-highlight">
      <div className="container">
        <ul className="highlight-list row">
          <li className="highlight-item col col-6 col-sm-12">
            <div className=" highlight">
              <h4 className="highlight-title">New arrivalsare now in!</h4>
              <Link className="highlight-link btn btn-info" to="/">
                SHOW COLLECTION
              </Link>
            </div>
          </li>
          <li className="highlight-item col col-3 col-sm-6">
            <div className="highlight">
              <h4 className="highlight-title">Basic t-shirts $29,99</h4>
              <Link className="highlight-link btn btn-info" to="/">
                MORE DETAILS
              </Link>
            </div>
          </li>
          <li className="highlight-item col col-3 col-sm-6">
            <div className="highlight">
              <span className="badge badge-danger">-50%</span>
              <h4 className="highlight-title">Sale this summer</h4>
              <Link className="highlight-link btn btn-info" to="/">
                VIEW ALL
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
