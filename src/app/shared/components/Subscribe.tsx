import React from 'react'

const Subscribe = () => {
  return (
    <section className="section section-subscribe">
    <div className="container">
      <form action="" className="subscribe-form row">
        <label className="subscribe-content col col-6 col-sm-12" htmlFor="email">Subscribe to our newsletter
          and receive exclusive offers every
          week</label>
        <div className="col col-6 col-sm-12">
          <input className="subscribe-input col col-sm-12" type="email" name="email" id="email"
            placeholder="Enter your email"/>
          <button className="btn btn-primary" type="submit">SUBSCRIBE</button>
        </div>
      </form>
    </div>
  </section>

  )
}

export default Subscribe
