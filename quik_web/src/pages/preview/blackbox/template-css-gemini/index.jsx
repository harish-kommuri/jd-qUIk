
import React from 'react';
import styles from './OfferCard.module.css';
import { FaPhone, FaStar, FaStarHalfAlt, FaStar as FaStarEmpty, FaMapMarkerAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const OfferCard = () => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <img
          src="https://media.justdial.com/mediacontent/picx/9/W/550866819W19645A_1653984652227.jpg" 
          alt="Croma Oberoi Mall" 
          className={styles.storeImage}
        />
        <div className={styles.storeDetails}>
          <h2>Croma Oberoi Mall</h2>
          <div className={styles.rating}>
            <span className={styles.ratingValue}>4.4</span>
            <FaStar className={styles.starIcon} color="orange" />
            <FaStar className={styles.starIcon} color="orange" />
            <FaStar className={styles.starIcon} color="orange" />
            <FaStarHalfAlt className={styles.starIcon} color="orange" />
            <FaStarEmpty className={styles.starIcon} color="lightgray" />
          </div>
          <div className={styles.location}>
            <FaMapMarkerAlt color="gray" size={12} />
            <span>Malad West · 0.11 km</span>
          </div>
          <div className={styles.buttons}>
            <button className={styles.showNumberBtn}>
              <FaPhone /> Show Number
            </button>
            <button className={styles.getDirectionBtn}>
              <FaArrowRight /> Get Direction
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <div className={styles.carousel}>
          <button className={styles.carouselBtn}><FaArrowLeft /></button>
          <img
            src="https://test.justdial.com/images/croma_offer.png" 
            alt="Offer Banner" 
            className={styles.offerImage}
          />
          <button className={styles.carouselBtn}><FaArrowRight /></button>
        </div>

        <div className={styles.offerInfo}>
          <h3>Flat 10% off</h3>
          <p>
            Brace yourself for the craziest deals. Expert tips on how to shop during a 
            sale to help you get everything you want and need.
          </p>
          <p><strong>1 Dec - 31 Dec 2022</strong></p>
          <p className={styles.sourceText}>Source: Mc Donald's Official website</p>
          <p className={styles.expiringSoon}><span className={styles.expiringDot}>●</span> Expiring Soon</p>
        </div>

        <div className={styles.terms}>
          <h4>Terms & Conditions</h4>
          <ul>
            <li>Offer will not be applicable on Business, Commercial & Corporate ICICI Bank Credit Cards.</li>
            <li>Offer will not be applicable on Debit Card full swipe transactions.</li>
            <li>Offer cannot be combined with brand EMI offer.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
