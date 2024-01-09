function App() {
  return (
    <div id="contact" className="section bg-gray">
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading text-center">GET IN TOUCH</h2>
              <p className="subheading text-center">
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-12">
              <form
                action="#"
                className="form-contact form-contact-dark"
                id="contactForm"
                data-toggle="validator"
              >
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="p_name"
                        placeholder="Enter Name"
                        required=""
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="p_email"
                        placeholder="Enter Email"
                        required=""
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="p_subject"
                        placeholder="Subject"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="p_phone"
                        placeholder="Enter Phone Number"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    id="p_message"
                    className="form-control"
                    rows="6"
                    placeholder="Enter Your Message"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <div className="text-center">
                    <div id="success"></div>
                    <button type="submit" className="btn btn-primary">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
