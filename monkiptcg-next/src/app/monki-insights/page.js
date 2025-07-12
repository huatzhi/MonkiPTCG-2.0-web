'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../../styles/MonkiInsights.css';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
// TODO: Install and configure firebase
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPfPFj5JHcZjthbCaYMaG_PcJgbQWnkSs",
    authDomain: "teammonki-a2221.firebaseapp.com",
    databaseURL: "https://teammonki-a2221-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "teammonki-a2221",
    storageBucket: "teammonki-a2221.firebasestorage.app",
    messagingSenderId: "266242402006",
    appId: "1:266242402006:web:b54de96ba9dd8bf10a8b77",
    measurementId: "G-JNBWWEG0XG"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

export default function MonkiInsightsPage() {
    const [user, setUser] = useState(null);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [filters, setFilters] = useState({
        type: 'all',
        author: 'all',
        sort: 'newest'
    });

    // Articles data
    const articlesData = [
        {
            id: 101,
            title: "Card Mania 2025 Champion [Gardevoir Ex] Post-Tournament Report & Deck Guide",
            author: "Tommy Leong",
            authorAvatar: "/images/team/players/player3.jpg",
            date: "2025-04-15",
            type: "free",
            excerpt: "This article will introduce Tommy Leong's deep thoughts on Gardevoir ex",
            thumbnail: "/images/monkiinsights/101page1.jpg",
            wordpressLink: "https://tommylcf0613.wordpress.com/",
            content: [
                {
                    type: "title",
                    text: "Catalog"
                },
                {
                    type: "paragraph",
                    text: "1.Prologue\n2.Preparation Stage\n3.Deck List\n4.Game Plan\n5.Tournament Rundown\n6.Matchups Highlights\n7.Current Meta (SV10 Destined Rivals)\n8.Future Meta\n9.Conclusion"
                },
                {
                    type: "title",
                    text: "Prologue"
                },
                {
                    type: "paragraph",
                    text: "Greetings to all, this is Tommy Leong, from Team Monki. After winning the Card Mania 2025 Tournament, the largest non-official PTCG event in Malaysia (256 players), I decided to make this post not only to express my deep appreciation, but also to share more on the tournament run-through, some personal thoughts, a guide and the future direction on my beloved Gardevoir ex deck. Most importantly, I hope this post helps and motivate new players, bringing more Gardevoir lovers into our meta."
                },
                {
                    type: "paragraph",
                    text: "Who am I?\nI have been a die-hard Gardevoir player since the Paldean Fates format, the deck has brought me to some decent results:\n\n1. Pokemon Championships 2023-2024 Malaysia – Top 32\n2. TCGKL PTCG Championship 2024 Malaysia – Champion\n3. Premier Ball League 2024-2025 Malaysia – Top 8\n4. TCGKL Card Mania 2025 Malaysia – Champion"
                },
                {
                    type: "paragraph",
                    text: "Follow me on Instagram: <a href='https://www.instagram.com/tommy._.lcf?igsh=MWhwdnNtMjk3ZHI3dQ==' target='_blank' data-social-link'>@tommy._.lcf</a>"
                },
                {
                    type: "title",
                    text: "Preparation stage:"
                },
                {
                    type: "paragraph",
                    text: "During the preparation for Card Mania 2025, I had three decks in mind: Gardevoir, pure Dragapult, and Joltik Box. Joltik Box was the first deck I dropped after testing, mainly due to its poor matchup against Raging Bolt. Although pure Dragapult has a great matchup spread and performs well into Charizard (Malaysia’s meta favourite deck), I wasn’t confident playing it in a limited 25-minute Swiss round. If I were to play Dragapult, I’d rather go with the Maractus Lock version instead. After some the meta-analysis, chats with pros and discussion with teammates. I decided to stick with Gardevoir ex as my competitive deck, for these solid reasons:\n..."
                },
                
            ]
        }
    ];

    // Initialize filtered articles
    useEffect(() => {
        setFilteredArticles(articlesData);
        // 检查URL参数，自动弹窗
        if (typeof window !== 'undefined') {
          const params = new URLSearchParams(window.location.search);
          const id = params.get('id');
          if (id) {
            const article = articlesData.find(item => String(item.id) === id);
            if (article) {
              setSelectedArticle(article);
              setIsArticleModalOpen(true);
              document.body.style.overflow = 'hidden';
            }
          }
        }
    }, []);

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);
    //         } else {
    //             setUser(null);
    //         }
    //     });
    //     return () => unsubscribe();
    // }, []);

    // Filter articles based on selected criteria
    const applyFilters = () => {
        let filtered = [...articlesData];

        // Filter by type
        if (filters.type !== 'all') {
            filtered = filtered.filter(article => article.type === filters.type);
        }

        // Filter by author
        if (filters.author !== 'all') {
            const authorMap = {
                'tommy': 'Tommy Leong'
            };
            filtered = filtered.filter(article => article.author === authorMap[filters.author]);
        }

        // Sort articles
        filtered.sort((a, b) => {
            switch (filters.sort) {
                case 'newest':
                    return new Date(b.date) - new Date(a.date);
                case 'oldest':
                    return new Date(a.date) - new Date(b.date);
                case 'popular':
                    // For now, sort by date as popularity data is not available
                    return new Date(b.date) - new Date(a.date);
                default:
                    return 0;
            }
        });

        setFilteredArticles(filtered);
    };

    // Handle filter changes
    const handleFilterChange = (filterType, value) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: value
        }));
    };

    // Open article modal
    const openArticleModal = (article) => {
        setSelectedArticle(article);
        setIsArticleModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    // Close article modal
    const closeArticleModal = () => {
        setIsArticleModalOpen(false);
        setSelectedArticle(null);
        document.body.style.overflow = 'unset';
    };

    // Handle login (commented out as requested)
    const handleLogin = async (email, password) => {
        // try {
        //     await signInWithEmailAndPassword(auth, email, password);
        //     setLoginModalOpen(false);
        // } catch (error) {
        //     console.error('Login failed:', error);
        //     alert('Login failed: ' + error.message);
        // }
        alert('Firebase is not configured yet.');
    };

    const handleGoogleLogin = async () => {
        // try {
        //     await signInWithPopup(auth, googleProvider);
        //     setLoginModalOpen(false);
        // } catch (error) {
        //     console.error('Google login failed:', error);
        //     alert('Google login failed: ' + error.message);
        // }
        alert('Firebase is not configured yet.');
    };

    const handleLogout = async () => {
        // try {
        //     await signOut(auth);
        // } catch (error) {
        //     console.error('Logout failed:', error);
        // }
        alert('Firebase is not configured yet.');
    };

    return (
        <>
            {/* Header Section */}
            <header>
                <Navigation />
                {/* User Login Button - Hidden as requested */}
                <div className="user-auth" style={{ display: 'none' }}>
                    {!user ? (
                        <button id="loginBtn" className="login-btn" onClick={() => setLoginModalOpen(true)}>
                            <i className="fas fa-user"></i> Login
                        </button>
                    ) : (
                        <div className="user-profile">
                            <img src={user.photoURL || 'https://via.placeholder.com/40'} alt="User Profile" className="user-avatar" />
                            <span className="user-name">{user.displayName || user.email}</span>
                            <div className="user-dropdown">
                                <ul>
                                    <li><a href="#profile">Profile</a></li>
                                    <li><a href="#purchases">Purchased Articles</a></li>
                                    <li><a href="#settings">Settings</a></li>
                                    <li><a href="#logout" onClick={handleLogout}>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            <div className="monki-insights-page">
                {/* Hero Section */}
                <section className="hero-section" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/monkiinsights/hero-monkiinsights.jpg')" }}>
                    <div className="hero-content">
                        <h1>MONKI INSIGHTS</h1>
                        <p className="hero-subtitle">Professional insights and deck sharing from team members</p>
                    </div>
                </section>

                {/* Main Content */}
                <div className="container">
                    <main className="main-content">
                        {/* Filter Section */}
                        <section className="filter-section">
                            <div className="filter-container">
                                <div className="filter-group">
                                    <label htmlFor="filter-type">Article Type</label>
                                    <select 
                                        id="filter-type" 
                                        value={filters.type}
                                        onChange={(e) => handleFilterChange('type', e.target.value)}
                                    >
                                        <option value="all">All</option>
                                        <option value="free">Free</option>
                                        <option value="paid">Paid</option>
                                    </select>
                                </div>
                                <div className="filter-group">
                                    <label htmlFor="filter-author">Author</label>
                                    <select 
                                        id="filter-author"
                                        value={filters.author}
                                        onChange={(e) => handleFilterChange('author', e.target.value)}
                                    >
                                        <option value="all">All</option>
                                        <option value="terry">Terry Chan</option>
                                        <option value="justin">Justin Wong</option>
                                        <option value="waikit">Yiam Wai Kit</option>
                                        <option value="tommy">Tommy Leong</option>
                                    </select>
                                </div>
                                <div className="filter-group">
                                    <label htmlFor="filter-sort">Sort By</label>
                                    <select 
                                        id="filter-sort"
                                        value={filters.sort}
                                        onChange={(e) => handleFilterChange('sort', e.target.value)}
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="oldest">Oldest First</option>
                                        <option value="popular">Most Popular</option>
                                    </select>
                                </div>
                                <button className="filter-button" onClick={applyFilters}>Apply Filters</button>
                            </div>
                        </section>

                        {/* Articles Grid */}
                        <section className="articles-section">
                            <div className="articles-grid">
                                {filteredArticles.length > 0 ? (
                                    filteredArticles.map((article) => (
                                        <div key={article.id} className="article-card">
                                            <div className="article-thumbnail">
                                                <Image src={article.thumbnail} alt="Article thumbnail" width={300} height={200} />
                                            </div>
                                            <div className="article-info">
                                                <div className="article-meta">
                                                    <span className="article-date">{article.date}</span>
                                                    <span className="article-author">
                                                        <Image src={article.authorAvatar} alt={article.author} className="author-avatar" width={24} height={24} />
                                                        {article.author}
                                                    </span>
                                                </div>
                                                <h3 className="article-title">{article.title}</h3>
                                                <p className="article-excerpt">{article.excerpt}</p>
                                                <div className="article-actions">
                                                    <button 
                                                        onClick={() => openArticleModal(article)} 
                                                        className="read-button"
                                                    >
                                                        Read Article
                                                    </button>
                                                    <div className={`article-price ${article.type}`}>
                                                        {article.type === 'free' ? 'Free' : 'Paid'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="no-results">
                                        <div className="no-results-icon">
                                            <i className="fas fa-search"></i>
                                        </div>
                                        <h3>No articles found</h3>
                                        <p>Try adjusting your filters or browse all articles</p>
                                        <button 
                                            className="reset-filters-btn"
                                            onClick={() => {
                                                setFilters({
                                                    type: 'all',
                                                    author: 'all',
                                                    sort: 'newest'
                                                });
                                                setFilteredArticles(articlesData);
                                            }}
                                        >
                                            Reset Filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            {/* Article Modal */}
            {isArticleModalOpen && selectedArticle && (
                <div className="article-modal-overlay" onClick={closeArticleModal}>
                    <div className="article-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="article-modal-close" onClick={closeArticleModal}>
                            ×
                        </button>
                        <div className="article-modal-content">
                            <div className="article-modal-body">
                                {/* Article Header */}
                                <div className="article-modal-header">
                                    <h1>{selectedArticle.title}</h1>
                                    <div className="article-modal-meta">
                                        <span className="article-modal-date">{selectedArticle.date}</span>
                                        <span className="article-modal-author">
                                            <Image src={selectedArticle.authorAvatar} alt={selectedArticle.author} width={32} height={32} />
                                            {selectedArticle.author}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Article Content */}
                                <div className="article-modal-content-body">
                                    {selectedArticle.content.map((item, index) => (
                                        <div key={index} className={`article-modal-${item.type}`}>
                                            {item.type === 'paragraph' && (
                                                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                            )}
                                            {item.type === 'title' && (
                                                <h2 className="article-modal-subtitle">{item.text}</h2>
                                            )}
                                        </div>
                                    ))}
                                    
                                    {/* Keep Reading Button */}
                                    <div className="keep-reading-section">
                                        <a 
                                            href={selectedArticle.wordpressLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="keep-reading-button"
                                        >
                                            Keep Reading
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <Footer />

            {/* Login Modal - Hidden as requested */}
            {isLoginModalOpen && (
                <div id="loginModal" className="login-modal active">
                    <div className="modal-content">
                        <span className="close-modal" onClick={() => setLoginModalOpen(false)}>&times;</span>
                        <h2>Login</h2>
                        <form className="login-form" onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin(e.target.email.value, e.target.password.value);
                        }}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <button type="submit" className="btn-primary">Login</button>
                        </form>
                        <div className="social-login">
                            <p>Or login with</p>
                            <button className="google-login" onClick={handleGoogleLogin}>
                                <i className="fab fa-google"></i> Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}