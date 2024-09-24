import { useState } from 'react'
import PropTypes from 'prop-types'; 

const ContactForm = ({ setContactFormVisible }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: '',
      });
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', title: '', message: '' });
          } else {
            setErrorMessage('Failed to send your message. Please try again.');
          }
        } catch (error) {
          setErrorMessage('An error occurred. Please try again.');
        }
      };
  return (
    <div className="fixed z-50 w-[80vw] left-[10vw] top-[6vh] mb-[5vh] p-8 rounded-2xl justify-center font-navbar text-[#F5F5DC] bg-black 
        bg-opacity-95 animate-slideIn">
        <button
        onClick={() => setContactFormVisible(false)}
        className="absolute text-3xl top-2 right-4 text-gray-500 hover:text-gray-800"
        >
            &#10005;
        </button>
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[#F5F5DC] mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#F5F5DC] mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#F5F5DC] mb-2" htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#F5F5DC] mb-2" htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full text-black px-3 py-2 border rounded-lg"
            rows="4"
            required
          />
        </div>

        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <button
          type="submit"
          className="w-full bg-amber-500 text-[#F5F5DC] py-2 rounded-lg hover:text-black"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

// Define prop types for validation
ContactForm.propTypes = {
    setContactFormVisible: PropTypes.func.isRequired,
  };

export default ContactForm