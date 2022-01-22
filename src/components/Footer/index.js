import React from 'react'
import './Footer.css'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icon">
        <FacebookRoundedIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <YouTubeIcon/>
      </div>
      <div className="footer-contain">
        <div className="footer-column">
          <span>Audio and Subtitles</span>
          <span>Media Center</span>
          <span>Privacy</span>
          <span>Contact Us</span>
        </div>
        <div className="footer-column">
          <span>Audio Description</span>
          <span>Investor Relations</span>
          <span>Legal Notices</span>
        </div>
        <div className="footer-column">
          <span>Help Center</span>
          <span>Jobs</span>
          <span>Cookie Preferences</span>
        </div>
        <div className="footer-column">
          <span>Gift Cards</span>
          <span>Term of Use</span>
          <span>Corporate Information</span>
        </div>
      </div>
      <button className="footer-btn">Service Code</button>
    </div>
  )
}

export default Footer
