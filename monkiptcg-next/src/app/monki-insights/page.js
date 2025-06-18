'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../../styles/MonkiInsights.css';
import Footer from '../../components/Footer';
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
                <nav className="navbar">
                    <div className="logo">
                        <img src="/images/logo.png" alt="Team Monki Logo" />
                    </div>
                    <ul className="nav-links">
                        <li><Link href="/">Home</Link></li>
                        <li className="dropdown">
                            <a href="#about">About</a>
                            <ul className="dropdown-content">
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="/socials">Socials</Link></li>
                                <li><Link href="/news">News</Link></li>
                                <li><Link href="/partners">Partners</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#team">Team</a>
                            <ul className="dropdown-content">
                                <li><Link href="/team-members">Team Members</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/journey">Journey</Link></li>
                        <li className="dropdown">
                            <a href="#community">Community</a>
                            <ul className="dropdown-content">
                                <li><Link href="/monki-insights">Monki Insights</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#contact">Contact</a>
                            <ul className="dropdown-content">
                                <li><a href="#contact-us">Contact Us</a></li>
                                <li><a href="#social-media">Social Media</a></li>
                                <li><a href="#support-help">Support/Help</a></li>
                                <li><a href="#business-inquiries">Business Inquiries</a></li>
                                <li><a href="#career">Career</a></li>
                            </ul>
                        </li>
                    </ul>
                    {/* User Login Button */}
                    <div className="user-auth">
                        {!user ? (
                            <button id="loginBtn" className="login-btn" onClick={() => setLoginModalOpen(true)}>
                                <i className="fas fa-user"></i> 登录
                            </button>
                        ) : (
                            <div className="user-profile">
                                <img src={user.photoURL || 'https://via.placeholder.com/40'} alt="User Profile" className="user-avatar" />
                                <span className="user-name">{user.displayName || user.email}</span>
                                <div className="user-dropdown">
                                    <ul>
                                        <li><a href="#profile">个人资料</a></li>
                                        <li><a href="#purchases">已购文章</a></li>
                                        <li><a href="#settings">设置</a></li>
                                        <li><a href="#logout" onClick={handleLogout}>退出登录</a></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/hero-bg.jpg')" }}>
                <div className="hero-content">
                    <h1>MONKI INSIGHTS</h1>
                    <p className="hero-subtitle">战队成员的专业见解与卡组分享</p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container">
                <main className="main-content">
                    {/* Filter Section */}
                    <section className="filter-section">
                        <div className="filter-container">
                            <div className="filter-group">
                                <label htmlFor="filter-type">文章类型</label>
                                <select id="filter-type">
                                    <option value="all">全部</option>
                                    <option value="free">免费</option>
                                    <option value="paid">付费</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label htmlFor="filter-author">作者</label>
                                <select id="filter-author">
                                    <option value="all">全部</option>
                                    <option value="terry">Terry Chan</option>
                                    <option value="justin">Justin Wong</option>
                                    <option value="waikit">Yiam Wai Kit</option>
                                    <option value="tommy">Tommy Leong</option>
                                </select>
                            </div>
                            <div className="filter-group">
                                <label htmlFor="filter-sort">排序方式</label>
                                <select id="filter-sort">
                                    <option value="newest">最新发布</option>
                                    <option value="oldest">最早发布</option>
                                    <option value="popular">最受欢迎</option>
                                </select>
                            </div>
                            <button className="filter-button">应用筛选</button>
                        </div>
                    </section>

                    {/* Articles Grid */}
                    <section className="articles-section">
                        <div className="articles-grid">
                            {/* Article 1 */}
                            <div className="article-card">
                                <div className="article-thumbnail">
                                    <Image src="https://via.placeholder.com/300x200" alt="文章缩略图" width={300} height={200} />
                                    <div className="article-price free">免费</div>
                                </div>
                                <div className="article-info">
                                    <div className="article-meta">
                                        <span className="article-date">2025-04-15</span>
                                        <span className="article-author">
                                            <Image src="/images/team/leadership/captain.jpg" alt="Terry Chan" className="author-avatar" width={24} height={24} />
                                            Terry Chan
                                        </span>
                                    </div>
                                    <h3 className="article-title">初学者指南：了解当前PTCG标准赛制环境</h3>
                                    <p className="article-excerpt">本文将为新手玩家介绍当前PTCG标准赛制的基本环境，包括主流卡组类型和基础战术...</p>
                                    <a href="article1.html" className="read-button">阅读文章</a>
                                </div>
                            </div>

                            {/* Article 2 */}
                            <div className="article-card">
                                <div className="article-thumbnail">
                                    <Image src="https://via.placeholder.com/300x200" alt="文章缩略图" width={300} height={200} />
                                    <div className="article-price paid">¥15</div>
                                </div>
                                <div className="article-info">
                                    <div className="article-meta">
                                        <span className="article-date">2025-04-10</span>
                                        <span className="article-author">
                                            <Image src="/images/team/players/player1.jpg" alt="Justin Wong" className="author-avatar" width={24} height={24} />
                                            Justin Wong
                                        </span>
                                    </div>
                                    <h3 className="article-title">Lost Box卡组详解：构筑思路与对局策略</h3>
                                    <p className="article-excerpt">深入分析Lost Box卡组的构筑思路、核心卡牌选择以及面对不同对手的策略调整...</p>
                                    <a href="article-2.html" className="read-button">阅读文章</a>
                                </div>
                            </div>

                            {/* Article 3 */}
                            <div className="article-card">
                                <div className="article-thumbnail">
                                    <Image src="https://via.placeholder.com/300x200" alt="文章缩略图" width={300} height={200} />
                                    <div className="article-price paid">¥20</div>
                                </div>
                                <div className="article-info">
                                    <div className="article-meta">
                                        <span className="article-date">2025-04-05</span>
                                        <span className="article-author">
                                            <Image src="/images/team/players/player2.jpg" alt="Yiam Wai Kit" className="author-avatar" width={24} height={24} />
                                            Yiam Wai Kit
                                        </span>
                                    </div>
                                    <h3 className="article-title">Mew VMAX进阶技巧：如何应对当前环境中的克制卡组</h3>
                                    <p className="article-excerpt">本文分享Mew VMAX卡组在面对不利对局时的技巧与策略，帮助玩家提升胜率...</p>
                                    <a href="article-3.html" className="read-button">阅读文章</a>
                                </div>
                            </div>

                            {/* Article 4 */}
                            <div className="article-card">
                                <div className="article-thumbnail">
                                    <Image src="https://via.placeholder.com/300x200" alt="文章缩略图" width={300} height={200} />
                                    <div className="article-price free">免费</div>
                                </div>
                                <div className="article-info">
                                    <div className="article-meta">
                                        <span className="article-date">2025-03-28</span>
                                        <span className="article-author">
                                            <Image src="/images/team/players/player3.jpg" alt="Tommy Leong" className="author-avatar" width={24} height={24} />
                                            Tommy Leong
                                        </span>
                                    </div>
                                    <h3 className="article-title">比赛准备指南：如何高效备战PTCG锦标赛</h3>
                                    <p className="article-excerpt">从卡组选择到心理准备，全方位指导玩家如何为即将到来的PTCG锦标赛做好准备...</p>
                                    <a href="article-4.html" className="read-button">阅读文章</a>
                                </div>
                            </div>

                            {/* Article 5 */}
                            <div className="article-card">
                                <div className="article-thumbnail">
                                    <Image src="https://via.placeholder.com/300x200" alt="文章缩略图" width={300} height={200} />
                                    <div className="article-price paid">¥25</div>
                                </div>
                                <div className="article-info">
                                    <div className="article-meta">
                                        <span className="article-date">2025-03-20</span>
                                        <span className="article-author">
                                            <Image src="/images/team/leadership/captain.jpg" alt="Terry Chan" className="author-avatar" width={24} height={24} />
                                            Terry Chan
                                        </span>
                                    </div>
                                    <h3 className="article-title">冠军卡组分析：2025年马来西亚地区赛冠军卡组详解</h3>
                                    <p className="article-excerpt">独家分析2025年马来西亚地区赛冠军使用的卡组构筑思路、核心战术和关键对局回顾...</p>
                                    <a href="article-5.html" className="read-button">阅读文章</a>
                                </div>
                            </div>

                            {/* Article 6 */}
                            <div className="article-card">
                                <div className="article-thumbnail">
                                    <Image src="https://via.placeholder.com/300x200" alt="文章缩略图" width={300} height={200} />
                                    <div className="article-price paid">¥18</div>
                                </div>
                                <div className="article-info">
                                    <div className="article-meta">
                                        <span className="article-date">2025-03-15</span>
                                        <span className="article-author">
                                            <Image src="/images/team/players/player4.jpg" alt="Eden Lee" className="author-avatar" width={24} height={24} />
                                            Eden Lee
                                        </span>
                                    </div>
                                    <h3 className="article-title">Gardevoir ex卡组构筑指南：核心卡牌选择与替换方案</h3>
                                    <p className="article-excerpt">详细解析Gardevoir ex卡组的构筑思路，包括核心卡牌选择、能量配比以及针对不同环境的替换方案...</p>
                                    <a href="article-6.html" className="read-button">阅读文章</a>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="pagination">
                            <button className="page-btn active">1</button>
                            <button className="page-btn">2</button>
                            <button className="page-btn">3</button>
                            <button className="page-btn next">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </section>
                </main>
            </div>

            {/* Footer */}
            <Footer />

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div id="loginModal" className="login-modal active">
                    <div className="modal-content">
                        <span className="close-modal" onClick={() => setLoginModalOpen(false)}>&times;</span>
                        <h2>登录</h2>
                        <form className="login-form" onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin(e.target.email.value, e.target.password.value);
                        }}>
                            <div className="form-group">
                                <label htmlFor="email">邮箱</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">密码</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <button type="submit" className="btn-primary">登录</button>
                        </form>
                        <div className="social-login">
                            <p>或使用以下方式登录</p>
                            <button className="google-login" onClick={handleGoogleLogin}>
                                <i className="fab fa-google"></i> 使用 Google 登录
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}