import React from 'react';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, 
  FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaApplePay
} from 'react-icons/fa';
import { FiLink, FiMail, FiBookmark } from 'react-icons/fi';
import { BiMailSend } from 'react-icons/bi';
import { adminNavbarStyles, footerStyles } from '../assets/adminStyles';


function Footer() {

  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/' },
    { icon: FaTwitter, url: 'https://twitter.com/' },
    { icon: FaInstagram, url: 'https://www.instagram.com/' },
    { icon: FaYoutube, url: 'https://www.youtube.com/' }
  ];

  const quickLinks = ['Home', 'Items', 'Contact'];

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.topBorder}/>

      {/* Floating shapes */}
      <div className={`${footerStyles.floatingShape} -top-24 -right-24 w-80 h-80 opacity-20`}></div>
      <div className={`${footerStyles.floatingShape} -bottom-40 -left-24 w-96 h-96 opacity-15 animation-delay-2000`}></div>
      <div className={`${footerStyles.floatingShape} top-1/4 left-1/3 w-64 h-64 bg-emerald-600 opacity-10 animate-pulse animation-delay-1000`}></div>

      <div className={footerStyles.container}>
        <div className={footerStyles.grid}>

          {/* Brand */}
          <div>
            <h2 className={footerStyles.brandTitle}>
              P<span className={footerStyles.brandSpan}>J</span>
            </h2>
            <p className={adminNavbarStyles.brandText}>
              Your one-stop shop for fresh groceries delivered to your doorstep.
            </p>
            <div className='flex space-x-3'>
              {socialLinks.map((social, idx) => (
                <a
                  href={social.url}
                  key={idx}
                  target='_blank'
                  rel="noopener noreferrer"
                  aria-label={`visit our ${social.icon.name.replace('Fa','')} page`}
                  className={adminNavbarStyles.socialLink}
                >
                  <social.icon className={adminNavbarStyles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={adminNavbarStyles.sectionTitle}>
              <FiLink className={footerStyles.sectionIcon}/> Quick Links
            </h3>
            <ul className={footerStyles.linkList}>
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item ==='Home'? '/': `/${item.toLowerCase()}`}
                   className={footerStyles.linkItem}>
                    <span className={footerStyles.linkBullet}></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={footerStyles.sectionTitle}>
              Contact Us
            </h3>
            <ul className='space-y-2 text-sm sm:text-base'>
              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <FaMapMarkerAlt className={footerStyles.contactIcon}/>
                </div>
                <div>
                  <p>JECRC University, Sitapura, Jaipur, 302001 (Raj)</p>
                </div>
              </li>

              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <FaPhoneAlt className={footerStyles.contactIcon}/>
                </div>
                <div>
                  <p>+91 9876543210</p>
                </div>
              </li>

              <li className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconContainer}>
                  <FaEnvelope className={footerStyles.contactIcon}/>
                </div>
                <div>
                  <p>PJ@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
              {/* NEWSletter */}
          <div>
              <h3 className={footerStyles.sectionTitle}>
                <FiMail className={footerStyles.sectionIcon}/> NewsLetter
                </h3>
                <p className={footerStyles.newsletterText}>
                  Subscribe to our newsletter to get the latest updates on new products and upcoming sales. 
                  </p>
                  <div className={footerStyles.newsletterForm}>
                    <input type="email" placeholder='Enter email Address'
                    className={footerStyles.newsletterInput}/>

                    <button className={footerStyles.newsLetterButton}>
                      <BiMailSend className='mr-2 text-lg'/> 
                      <span>Subscribe</span>
                      </button>
                  </div>
                  <p className={footerStyles.privaccyText}>
                    We respect your privacy. Unsubscribe at any time.
                  </p>
          </div>
        </div>
        {/* Payment Method}*/}
        <div className={footerStyles.paymentSection}>
          <h4 className={footerStyles.paymentTitle}>
            <FiBookmark className={footerStyles.paymentIcon}/> We Accept All Major Payment Methods
          </h4>
          <div className={footerStyles.paymentMethods}>
            {[FaCcVisa,FaCcMastercard,FaCcAmex,FaCcPaypal,FaApplePay].map((Icon, idx) => (
              <div key={idx}className={footerStyles.paymentItem}>
                <Icon className={footerStyles.paymentIcon}/>
              </div>
            ))}
        </div>
        </div>

          <style>{footerStyles.customCSS}</style>
      </div>
    </footer>
  )
}

export default Footer;
