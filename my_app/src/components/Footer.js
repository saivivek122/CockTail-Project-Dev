import React, { useEffect } from 'react'
import './footer.css'

const Footer = () => {
  useEffect(() => {
   
    window.scrollTo(0, 0); // Scroll to the top when the component mounts or location changes
  }, []);
  return (
    <div className='main-information'>
    <div className='main-container'>
        <div className='contact-information'>
          <h3>Contact Information</h3>
          <ul>
            <li><b>Contact Us</b>: If you have any questions or comments, feel free to reach out to us!</li>
            <li><b>Email</b>: support@cocktailwebsite.com</li>
            <li><b>Phone</b>: (123) 456-7890</li>
          </ul>
        </div>
        <div className='social-media'>
            <h3>Social Media</h3>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Pinterest</li>

        </div>
        <div className='legal-information'>
            <h3>Privacy Policy</h3>
            <li><b>Privacy Policy</b>: Read our privacy policy to understand how we handle your information.</li>
            <li><b>Terms of Service</b>: By using our website, you agree to our terms of service.</li>
            <li><b>Cookie Policy</b>: Learn more about how we use cookies to enhance your experience.</li>
        </div>
        <div className='newssettler-signup'>
            <h3>News Settler</h3>
            <li><b>Stay Updated</b>: Subscribe to our newsletter for the latest cocktail recipes, tips, and exclusive offers.</li>
            <li>[Enter your email here] [Subscribe]</li>
        </div>
        <div className='additional-links'>
            <h3>Additional Information</h3>
            <li><b>About Us</b>: Learn more about our mission and the team behind Cocktail Website.</li>
            <li><b>Blog</b>: Check out our blog for cocktail tips, trends, and news.</li>
        </div>
        <div className='warnings-regarding-cocktails'>
            <h3>Warnings Regarding Cocktails</h3>
            <li><b>Drink Responsibly</b>: Enjoy cocktails in moderation. Excessive alcohol consumption can lead to health issues and impaired judgment.</li>
            <li><b>Age Restrictions</b>: This website is intended for individuals aged 21 and over. Please verify your age before exploring our cocktail recipes and recommendations.</li>
            <li><b>Health Warnings</b>:

Pregnant individuals and those with certain medical conditions should consult a healthcare professional before consuming alcoholic beverages.
Cocktails can interact with medications. Always check with your doctor if you are taking prescription drugs.</li>
        <li><b>Home Bartending Safety</b>: When mixing cocktails at home, ensure you have a safe environment. Be cautious with sharp tools and glassware, and never drink and drive.</li>
        <li><b>Allergy Information</b>: Some cocktails may contain allergens, such as nuts or dairy. Always check the ingredients and inform guests of potential allergens.</li>
        <li><b>Underage Drinking</b>: We do not condone or promote underage drinking. If you are not of legal drinking age, please refrain from accessing cocktail recipes and related content.</li>
        
        </div>
        <div className='about-disclaimer'>
            <h3>Disclaimer</h3>
            <p>The content provided on this website is intended for informational purposes only. We do not assume any responsibility for the consequences of alcohol consumption, and we encourage everyone to drink responsibly and in moderation.</p>
        </div>
     
    </div>
    </div>
  )
}

export default Footer
