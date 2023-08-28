export const Banner = () => {
  return (
    <section className='section section-banner'>
      <div className='container'>
        <div className='section-header'>
          <h2 className='section-title'>
            Sale of the
            <span className='txt-primary'>summer</span>
            collection
          </h2>
          <a
            className='section-link'
            href='/'
          >
            <i className='icon icon-arrow'></i>SHOP NOW
          </a>
        </div>
        <div className='banner-note'>
          <ul className='note-list flex'>
            <li className='note-item'>
              <div className='note flex'>
                <i className='icon icon-freeship note-icon'></i>
                <div className='note-content'>
                  <h4 className='note-title'>Free Shipping</h4>
                  <p className='note-desc txt-secondary'>
                    On purchase over $199
                  </p>
                </div>
              </div>
            </li>
            <li className='note-item'>
              <div className='note flex'>
                <i className='icon icon-satisfied note-icon'></i>
                <div className='note-content'>
                  <h4 className='note-title'>99% Satisfied Customers</h4>
                  <p className='note-desc txt-secondary'>
                    Our clients opinions speak for themselves
                  </p>
                </div>
              </div>
            </li>
            <li className='note-item'>
              <div className='note flex'>
                <i className='icon icon-guaranteed note-icon'></i>
                <div className='note-content'>
                  <h4 className='note-title'>Originality Guaranteed</h4>
                  <p className='note-desc txt-secondary'>
                    30 days warranty for each product from our store
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
