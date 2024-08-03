import React from 'react';
import styles from './MainPage.module.css';

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.heroBanner}>
                <div className={styles.backdropImg}>
                    <span className={`${styles.lazyLoadImageBackground} ${styles.blur}`}>
                        <img className="" alt="" src="NaN" />
                    </span>
                </div>
                <div className={styles.opacityLayer}></div>
                <div className={styles.contentWrapper}>
                    <div className={styles.heroBannerContent}>
                        <span className={styles.title}>Welcome.</span>
                        <span className={styles.subTitle}>
                            Millions of movies, TV shows and people to discover. Explore now.
                        </span>
                        <div className={styles.searchInput}>
                            <input type="text" placeholder="Search for a movie or tv show...." />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.carouselSection}>
                <div className={styles.contentWrapper}>
                    <span className={styles.carouselTitle}>Trending</span>
                    <div className={styles.switchingTabs}>
                        <div className={styles.tabItems}>
                            <span className={`${styles.tabItem} ${styles.active}`}>Day</span>
                            <span className={styles.tabItem}>Week</span>
                            <span className={styles.movingBg} style={{ left: '0px' }}></span>
                        </div>
                    </div>
                </div>
                <div className={styles.carousel}>
                    <div className={styles.contentWrapper}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            className={`${styles.carouselLeftNav} ${styles.arrow}`}
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                        </svg>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            className={`${styles.carouselRighttNav} ${styles.arrow}`}
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                        </svg>
                        <div className={styles.carouselItems}></div>
                    </div>
                </div>
            </div>
            <div className={styles.carouselSection}>
                <div className={styles.contentWrapper}>
                    <span className={styles.carouselTitle}>What's Popular</span>
                    <div className={styles.switchingTabs}>
                        <div className={styles.tabItems}>
                            <span className={`${styles.tabItem} ${styles.active}`}>Movies</span>
                            <span className={styles.tabItem}>TV Shows</span>
                            <span className={styles.movingBg} style={{ left: '0px' }}></span>
                        </div>
                    </div>
                </div>
                <div className={styles.carousel}>
                    <div className={styles.contentWrapper}>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            className={`${styles.carouselLeftNav} ${styles.arrow}`}
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
                        </svg>
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            className={`${styles.carouselRighttNav} ${styles.arrow}`}
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
                        </svg>
                        <div className={styles.carouselItems}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;