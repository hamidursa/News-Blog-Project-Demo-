import React, { useState } from 'react';
import Icon from '../../common/Icon/Icon';
import './ShareButtons.css';

export const ShareButtons = ({ title = '', url = '' }) => {
  const [copied, setCopied] = useState(false);

  const currentUrl = url || window.location.href;

  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`, '_blank');
  };

  const shareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="share-buttons-container">
      <span className="share-label">Share article:</span>
      <div className="share-btn-list">
        <button onClick={shareFacebook} className="share-btn fb" aria-label="Share on Facebook">
          <Icon name="facebook" />
        </button>
        <button onClick={shareTwitter} className="share-btn tw" aria-label="Share on Twitter">
          <Icon name="twitter" />
        </button>
        <button onClick={shareLinkedIn} className="share-btn li" aria-label="Share on LinkedIn">
          <Icon name="linkedin" />
        </button>
        <button onClick={copyLink} className="share-btn copy" aria-label="Copy article link">
          <Icon name="share" />
        </button>
      </div>
      {copied && <span className="copied-toast">Link copied!</span>}
    </div>
  );
};

export default ShareButtons;
