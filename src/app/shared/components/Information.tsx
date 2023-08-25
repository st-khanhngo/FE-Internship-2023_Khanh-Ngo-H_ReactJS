import React from 'react'

const Information = () => {
  return (
    <section className="section section-info">
    <div className="container">
      <div className="section-header">
        <h3 className="section-title txt-center">Why should you choose us?</h3>
      </div>
      <ul className="info-list row">
        <li className="info-item col col-3 col-sm-12">
          <div className="info row">
            <i className="icon icon-info icon-freeship col-sm-3"></i>
            <div className="col col-sm-9">
              <h4 className="info-title">Free Shipping</h4>
              <p className="info-desc txt-secondary">All purchases over $199 are eligible forfree shipping via USPS
                First
                ClassName Mail.
              </p>
            </div>
          </div>
        </li>
        <li className="info-item col col-3 col-sm-12">
          <div className="info info-highlight row">
            <i className="icon icon-info icon-payment col-sm-3"></i>
            <div className="col col-sm-9">
              <h4 className="info-title txt-primary">Easy Payments</h4>
              <p className="info-desc txt-secondary">All payments are processed instantlyover a secure payment protocol.
              </p>
            </div>
          </div>
        </li>
        <li className="info-item col col-3 col-sm-12">
          <div className="info row">
            <i className="icon icon-info icon-guaranteed col-sm-3"></i>
            <div className="col col-sm-9">
              <h4 className="info-title">Money-Back Guarantee</h4>
              <p className="info-desc txt-secondary">If an item arrived damaged or you'vechanged your mind, you can send
                itback for a
                full
                refund.</p>
            </div>
          </div>
        </li>
        <li className="info-item col col-3 col-sm-12">
          <div className="info row">
            <i className="icon icon-info icon-quality col-sm-3"></i>
            <div className="col col-sm-9">
              <h4 className="info-title">Finest Quality</h4>
              <p className="info-desc txt-secondary">Designed to last, each of our products hasbeen crafted with the
                finest materials.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
)
}

export default Information
