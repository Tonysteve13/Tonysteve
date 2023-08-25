import  { useState } from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt, FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState('');
    const [errorPopupVisible, setErrorPopupVisible] = useState(false);

    const validateName = () => {
        if (!name) {
            setNameError('Name is required');
        } else {
            setNameError('');
        }
    };

    const validateEmail = () => {
        if (!email) {
            setEmailError('Email is required');
        } else {
            setEmailError('');
        }
        // You can also add email format validation here
    };

    const validateSubject = () => {
        if (!subject) {
            setSubjectError('Subject is required');
        } else {
            setSubjectError('');
        }
    };

    const validateMessage = () => {
        if (!message) {
            setMessageError('Message is required');
        } else {
            setMessageError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        validateName();
        validateEmail();
        validateSubject();
        validateMessage();
    
        if (!nameError && !emailError && !subjectError && !messageError) {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('subject', subject);
            formData.append('message', message);
    
            try {
                const response = await fetch('https://formspree.io/f/mzblrkwq', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json',
                    },
                });
    
                if (response.ok) {
                    // Show success toast
                    toast.success('Message sent successfully!', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
    
                    // Clear form fields
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                } else {
                    // Show error toast
                    toast.error('Error sending message.', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            } catch (error) {
                // Show error toast
                toast.error('Error sending message.', {
                    position: toast.POSITION.TOP_RIGHT,
                });
                console.error('Error sending message:', error);
            }
        }
    };
    
    
    return (
        <section className="contact section">
            <h2 className="section__title">
                Get In <span>Touch</span>
            </h2>

              {errorPopupVisible && (
                <div className="error-popup">
                    <p className="error-popup__message">Check errors below</p>
                </div>
            )}

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">What are you waiting for !</h3>

                    <p className='contact__description'>
                       Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision or great team.
                     </p>

                     <div className="contact__info">
                        <div className="contact__item">
                             <FaEnvelopeOpen className='info__icon' />
                             <div>
                                 <span className="info__title">Mail me</span>
                                 <h4 className="info__desc">
                                     <a href="mailto:ts4665768@gmail.com" className='contact__link'>tonysteve.designx@gmail.com</a>
                                 </h4>
                             </div>
                         </div> <br />
                        <div className="contact__item">
                           <FaPhoneSquareAlt className='info__icon' />
                            <div>
                                 <span className="info__title">Call me</span>
                                 <h4 className="info__desc">
                                     <a href="tel:+237658459727" className="contact__link">
                                         +237 658459727
                                     </a>
                                 </h4>
                           </div>
                         </div>
                     </div>
                      <br />

                     <div className="contact__socials">
                         <a href="https://instagram.com/tony_designx?igshid=ZGUzMzM3NWJiOQ==" className='contact__social-link'>
                             <FaInstagram />
                         </a>
                         <a href="https://twitter.com/Tonyste75922244?t=RWHjGW9tf-4CjkhmCoIYQw&s=35" className='contact__social-link'>
                             <FaTwitter />
                         </a>
                         <a href="https://github.com/Tonysteve13" className='contact__social-link'>
                             <FaGithub />
                         </a>
                         <a href="https://www.linkedin.com/in/tony-steve-76219a260" className='contact__social-link'>
                             <FaLinkedin />
                         </a>
                         <a href="https://wa.me/+237 658459727" className='contact__social-link'>
                             <FaWhatsapp />
                         </a>
                     </div>

                </div>


                <div className="contact__form">
                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input
                                type="text"
                                placeholder='Your Name'
                                className={`form__control ${nameError ? 'error' : ''}`}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onBlur={validateName}
                            />
                            <span className="error-message">{nameError}</span>
                        </div>
                        <div className="form__input-div">
                            <input
                                type="email"
                                placeholder='Your Email'
                                className={`form__control ${emailError ? 'error' : ''}`}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={validateEmail}
                            />
                            <span className="error-message">{emailError}</span>
                        </div>
                        <div className="form__input-div">
                            <input
                                type="text"
                                placeholder='Your Subject'
                                className={`form__control ${subjectError ? 'error' : ''}`}
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                onBlur={validateSubject}
                            />
                            <span className="error-message">{subjectError}</span>
                        </div>
                    </div>
                    <textarea
                        placeholder='Your Message'
                        className={`form__control textarea ${messageError ? 'error' : ''}`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onBlur={validateMessage}
                    />
                    <span className="error-message">{messageError}</span>
                    <br /> <br />
                    <div className="button-wrapper">
                        <button className='button' type="submit" onClick={handleSubmit}>
                            Send Message
                            <span className="button__icon contact__button-icon">
                                <FiSend />
                            </span>
                        </button>
                    </div>
                </div>

                {submissionStatus && (
                    <div className="submission-status">
                        {submissionStatus}
                    </div>
                )}
            </div>
            <ToastContainer />
        </section>
    );
};

export default Contact;

