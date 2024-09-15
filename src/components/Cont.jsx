import React, { useState } from 'react'

export default function Cont() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formData.name, formData.email, formData.message);
    };

    const sendEmail = (name, email, message) => {
        // SMTP code here
        alert("Email sent successfully!");
    };
  return (
    <section id="contact">
            <h1 className="header"><span>Contact Me</span></h1>
            <div className="contact-container">
                <div className="contact-info">
                    <h2>Get in touch</h2><br/>
                    <p><strong>Email:</strong> <a href="mailto:name@domain.com">deep242jashan@gmail.com</a></p><br/>
                    <p><strong>Phone:</strong> (+91) 8449245401</p><br/>
                    <p className='heading'>Feel free to connect with me.</p>
                </div>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="input-row">
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <textarea
                        rows="5"
                        placeholder="Message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
        </section>
  )
}
