const infoList = [
  {
    id: 1,
    title: 'Free Shipping',
    desc: 'All purchases over $199 are eligible forfree shipping via USPS First ClassName Mail.',
    icon: 'icon-freeship',
  },
  {
    id: 2,
    title: 'Easy Payments',
    desc: 'All payments are processed instantlyover a secure payment protocol.',
    icon: 'icon-payment',
  },
  {
    id: 3,
    title: 'Money-Back Guarantee',
    desc: 'If an item arrived damaged or you have changed your mind, you can send it back for a full refund.',
    icon: 'icon-guaranteed',
  },
  {
    id: 4,
    title: 'Finest Quality',
    desc: 'Designed to last, each of our products hasbeen crafted with the finest materials.',
    icon: 'icon-quality',
  },
];

export const Information = () => {
  return (
    <section className="section section-info">
      <div className="container">
        <div className="section-header">
          <h3 className="section-title txt-center">
            Why should you choose us?
          </h3>
        </div>
        <ul className="info-list row">
          {infoList.map((info) => (
            <li className="info-item col col-3 col-sm-12" key={info.id}>
              <div className="info row">
                <i className={`icon icon-info col-sm-3 ${info.icon}`}></i>
                <div className="col col-sm-9">
                  <h4 className="info-title">{info.title}</h4>
                  <p className="info-desc txt-secondary">{info.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
