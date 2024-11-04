
import "./contact.css";

const Contact = () => {
  
  return (
    <>
      {/* <h1>Contact</h1> <br /> */}
      <div className="contact-container">
        <p className="title">Let's <br /> Collaborate <br /> Together</p>

        <div className="form-group fields">
          <div className="fullName fields">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="inputBox" id="fullName" name="fullName" required />
          </div>
         
          <div className="company-email fields">
            <div className="company">
              <label htmlFor="companyName">Company Name</label>
              <input type="text" className="inputBox" id="companyName" name="companyName" />
            </div>

            <div className="email">
              <label htmlFor="email">Email *</label>
              <input type="email" className="inputBox" id="email" name="email" />
            </div>
          </div>

          <div className="company-email fields">
            <div className="service">
            <label htmlFor="service">Select Service *</label>
            <select id="service" name="service" required>
              <option value="">Select a service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>

              <option value="service3">Service 3</option>
            </select>
            </div>

            <div className="budget">
            <label htmlFor="budget">Project Budget *</label>
            <select id="budget" name="budget" required>
              <option value="">Select a budget range</option>
              <option value="budget1">$0 - $1000</option>
              <option value="budget2">$1001 - $5000</option>
              <option value="budget3">$5001 - $10000</option>
            </select>
            </div>
          </div>

          <div className="projectDetails fields">
          <label htmlFor="projectDetails">Project Details *</label>
          <textarea id="projectDetails" name="projectDetails" required></textarea>
          </div>

          <div className="button fields">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact