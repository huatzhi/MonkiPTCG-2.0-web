'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import '../../styles/News_styles.css';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

export default function NewsPage() {
    const [selectedNews, setSelectedNews] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 新闻详情数据
    const newsData = [
        {
            id: 1,
            title: "Tommy Leong: Back to Back Champion of TCGKL's Annual Biggest Tournament",
            date: "June 1, 2025",
            summary: "Congratulations to Tommy Leong for securing 1st place in TCGKL's Annual Biggest Tournament...",
            content: [
                {
                    type: "paragraph",
                    text: "Tommy Leong, a professional PTCG player from Team Monki, emerged victorious at CardMania 2025, Malaysia’s largest non-official Pokémon TCG tournament, attracting 256 players. This victory marks another remarkable milestone for Tommy, who has solidified his reputation as a top-tier competitor with his signature Gardevoir deck, spread throughout the environment."
                },
                {
                    type: "image",
                    src: "/images/news/Latest Updates/news1page1.jpg",
                    alt: "Tommy Leong's victory at CardMania 2025",
                    caption: "Tommy Leong's victory at CardMania 2025"
                },
                {
                    type: "paragraph",
                    text: "A passionate Gardevoir player since the Paldean Fates format, Tommy has achieved notable results, including Top 32 at the 2023-2024 Pokémon Championships Malaysia, champion at TCGKL 2024, and Top 8 at the 2024-2025 Premier Ball League Malaysia. His triumph at Card Mania 2025 showcases his skill and strategic prowess in the competitive Pokémon TCG scene."
                },
                {
                    type: "title",
                    text: "Strategic Preparation Pays Off"
                },
                {
                    type: "paragraph",
                    text: "Leading up to the event, Tommy and his Team Monki teammates, including Nick Kee and Wai Kiat, meticulously analyzed the tournament’s meta, predicting a dominance of decks like Raging Bolt and Gardevoir. Choosing Gardevoir ex for its favorable matchups against popular decks, Tommy’s preparation included rigorous play-testing and collaboration with his team, which proved instrumental in his success."
                },
                {
                    type: "image",
                    src: "/images/news/Latest Updates/news1page2.jpg",
                    alt: "Tommy Leong's victory at CardMania 2025",
                    caption: "Tommy Leong's victory at CardMania 2025"
                },
                {
                    type: "paragraph",
                    text: "On Day 1, Tommy aimed for six wins to secure a spot in Day 2, overcoming a challenging Charizard matchup in his first game. Despite losses to strong opponents wielding Gholdengo and Charizard decks, he advanced to the elimination rounds. On Day 2, Tommy navigated tough matchups, clinching victory in the finals with his well-tuned Gardevoir ex deck."
                },
                {
                    type: "image",
                    src: "/images/news/Latest Updates/news1page3.jpg",
                    alt: "Tommy Leong's Gardevoir deck in CardMania 2025",
                    caption: "Tommy Leong's Gardevoir deck in CardMania 2025"
                },
                {
                    type: "paragraph",
                    text: "Tommy’s victory at Card Mania 2025 is a testament to his dedication and strategic thinking. His success highlights the importance of preparation, teamwork, and adaptability in competitive Pokémon TCG. Tommy expressed heartfelt thanks to TCGKL’s Sufian for organizing the event, Team Monki and Myhobby for their support, and friends Jack and SY for their encouragement. He also acknowledged the broader Pokémon TCG community for their supportive messages, highlighting the tight-knit nature of Malaysia’s growing player base, estimated at around 500 players."
                },
                {
                    type: "image",
                    src: "/images/news/Latest Updates/news1page4.jpg",
                    alt: "Tommy Leong's Championship belt",
                    caption: "Tommy Leong's Championship belt"
                },
                {
                    type: "paragraph",
                    text: "Finally, we're proud to celebrate his victory and look forward to his continued success in the competitive Pokémon TCG scene. Congratulations, Tommy!"
                }
            ]
        },
        {
            id: 2,
            title: "Monki Team Member - Nick Kee Secures 2nd Place in Malaysia MBL 2025",
            date: "April 20, 2025",
            summary: "Congratulations to Nick Kee for securing 2nd place in Malaysia MBL 2025...",
            content: [
                {
                    type: "paragraph",
                    text: "Congradulations to Monki Team's member Nick Kee has made a hestorical milestone as the first Malaysian player to reach the Pokémon TCG Master Ball League Finals two years consecutively!"
                },
                {
                    type: "image",
                    src: "/images/news/Latest Updates/news2page1.jpg",
                    alt: "Nick Kee securing 2nd place in Malaysia MBL 2025",
                    caption: "Nick Kee securing 2nd place in Malaysia MBL 2025"
                },
                {
                    type: "paragraph",
                    text: "In an exciting turn of events, Team Monki's Nick Kee has secured a remarkable 2nd place finish in the Malaysia MBL 2025 tournament. This achievement not only highlights Nick's exceptional skills but also showcases the strength of Team Monki's competitive lineup."
                },
                {
                    type: "paragraph",
                    text: "Nick's journey to the top began with a strong performance in the qualifiers, where he demonstrated exceptional deck construction and strategic gameplay. His consistent performance throughout the tournament, including a strong showing in the quarter-finals, ultimately led to his impressive 2nd place finish."
                },
                {
                    type: "image",
                    src: "/images/news/Latest Updates/news2page2.jpg",
                    alt: "Nick Kee final match with Ashen's Dragapult",
                    caption: "Nick Kee's final match with Ashen's Dragapult"
                },
                {
                    type: "title",
                    text: "Mastering the Poison Roaring Moon"
                },
                {
                    type: "paragraph",
                    text: "Nick‘s success hinged on his choice of a Roaring Moon deck with a poison package, a strategic pick to counter the meta. “I went the poison route to avoid the budew wall,” he explains, noting its versatility compared to other options. The deck’s multi-faceted approach—featuring damage output, no-retreat cost, and poison mechanics—allowed him to outmaneuver opponents, securing wins in 14 rounds, including nine Swiss rounds and five top-cut matches, with minimal donks."
                },
                {
                    type: "image",
                    src: "/images/news/Latest Updates/news2page3.jpg",
                    alt: "Nick Kee's Roaring Moon deck in Malaysia MBL 2025",
                    caption: "Nick Kee's Roaring Moon deck in Malaysia MBL 2025"
                },
                {
                    type: "paragraph",
                    text: "Despite a busy schedule, Nick prepared rigorously, play-testing with partners with Team Monki. He credits late-night sessions and meta analysis, emphasizing the importance of understanding deck's strengths and weaknesses."
                },
                {
                    type: "image",
                    src: "/images/news/Latest Updates/news2page4.jpg",
                    alt: "Nick Kee's trophy",
                    caption: "Nick Kee's trophy"
                },
                {
                    type: "title",
                    text: "Nick's Journey is Just Beginning"
                },
                {
                    type: "paragraph",
                    text: "Nick is gearing up for World Championships while keeping tabs on the evolving meta. We congratulate Nick for his achievement and wish him the best of luck in the upcoming tournaments! As a team, we are proud of his accomplishment and look forward to supporting him in his future endeavors."
                },
                {
                    type: "image",
                    src: "/images/news/Latest Updates/news2page5.jpg",
                    alt: "Nick's journey is just beginning",
                    caption: "Nick's journey is just beginning"
                },
                {
                    type: "paragraph",
                    text: "Let's go, Nick's journey is just beginning!"
                }
            ]
        }
    ];

    // Previous News 数据
    const previousNewsData = [
        {
            id: 101,
            title: "Team Monki Member - Justin Wong Secures 2nd Place in Malaysia UBL Penang Section 2025",
            date: "March 23, 2025",
            summary: "Congratulations to our last ride \"Lugia佬(Lou)\" Justin Wong to win second place at Penang's Ultra Ball League!",
            content: [
                {
                    type: "paragraph",
                    text: "Congratulations to our last ride \"Lugia佬(Lou)\" Justin Wong to win second place at Penang's Ultra Ball League! A final response and respect to F block cards rotating soon in April 2025."
                },
                {
                    type: "image",
                    src: "/images/news/Previous News/101page1.jpg",
                    alt: "Justin Wong's second place in Malaysia UBL Penang Section 2025",
                    caption: "Justin Wong's second place in Malaysia UBL Penang Section 2025"
                },
                {
                    type: "paragraph",
                    text: "Justin’s success was bolstered by a carefully crafted Lugia deck, shared and adviced by teammate Kaijian Yoong. Justin also credited Bobby for loaning him a \"Stamp Radiant Zard\" and most importantly, suggesting the inclusion of a secret supporter “Grant”, which he humorously dubbed his “soul card” adding a unique edge to his strategy. This collaborative effort with Team Monki proved pivotal in navigating the competitive field."
                },
                {
                    type: "image",
                    src: "/images/news/Previous News/101page2.jpg",
                    alt: "Justin Wong's Lugia deck in Malaysia UBL Penang Section 2025",
                    caption: "Justin Wong's Lugia deck in Malaysia UBL Penang Section 2025"
                },
                {
                    type: "paragraph",
                    text: "Reflecting on his journey, Justin bid an emotional goodbye to his Lugia deck, saying, “No more Lugia Lou jor,” while cherishing the memories and strong performance in his final UBL run. His second-place finish underscores his skill and dedication, cementing his status as a formidable competitor in Malaysia’s vibrant Pokémon TCG community."
                },
                {
                    type: "image",
                    src: "/images/news/Previous News/101page3.jpg",
                    alt: "Justin Wong's Lugia deck in Malaysia UBL Penang Section 2025",
                    caption: "Justin Wong's Lugia deck in Malaysia UBL Penang Section 2025"
                },
                {
                    type: "paragraph",
                    text: " \"No more Lugia, No more Lugia Lou\", now what Justin need to prepare for the next seasons is: Which deck he will probably play into? Let's wait and see! However Team Monki will always remember his strong performance and the memories he shared with team about the Lugia deck. Thank you for your dedication and hard work, Justin! We wish you the best of luck in your future endeavors! And whenever who talk about the Lugia deck, there will be the one and only \"Lugia佬(Lou)\" ---- Justin Wong!"
                }
            ]
        }
    ];

    const openModal = (newsId) => {
        // 从两个数据源中查找新闻
        const news = newsData.find(item => item.id === newsId) || 
                    previousNewsData.find(item => item.id === newsId);
        setSelectedNews(news);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNews(null);
        document.body.style.overflow = 'unset'; // 恢复背景滚动
    };

    useEffect(() => {
        // 添加页面特定的body类名
        document.body.classList.add('news-page-body');
        
        return () => {
            // 组件卸载时移除类名
            document.body.classList.remove('news-page-body');
            document.body.style.overflow = 'unset'; // 确保恢复滚动
        };
    }, []);

    return (
        <>
            {/* Header Section */}
            <header>
                <Navigation />
            </header>

            {/* Main Content */}
            <div className="news-container">
                {/* Main Content Area */}
                <main className="news-main-content">
                    <section className="news-page">
                        <h1>MONKI NEWS</h1>
                        
                        {/* Latest News Section */}
                        <div className="latest-news">
                            <h2>Latest Updates</h2>
                            <div className="news-grid">
                                {newsData.map((news) => (
                                    <article key={news.id} className="news-card">
                                        <div className="news-image">
                                            <Image src={news.id === 1 ? "/images/news/Latest Updates/news1.jpg" : "/images/news/Latest Updates/news2.jpg"} 
                                                   alt={news.title} 
                                                   width={350} 
                                                   height={250} />
                                        </div>
                                        <div className="news-content">
                                            <h3>{news.title}</h3>
                                            <p className="news-date">{news.date}</p>
                                            <p>{news.summary}</p>
                                            <button 
                                                onClick={() => openModal(news.id)} 
                                                className="read-more"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Events Section */}
                        <div className="upcoming-events">
                            <h2>Previous News</h2>
                            <div className="news-events-timeline">
                                {previousNewsData.map((news) => (
                                    <div key={news.id} className="news-timeline-item">
                                        <div className="news-timeline-date">{news.date}</div>
                                        <div className="news-timeline-content">
                                            <h3>{news.title}</h3>
                                            <p>{news.summary}</p>
                                            <button 
                                                onClick={() => openModal(news.id)} 
                                                className="read-more"
                                            >
                                                Read More
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* News Modal */}
            {isModalOpen && selectedNews && (
                <div className="news-modal-overlay" onClick={closeModal}>
                    <div className="news-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="news-modal-close" onClick={closeModal}>
                            ×
                        </button>
                        <div className="news-modal-content">
                            <div className="news-modal-body">
                                {/* 标题作为文章的第一部分 */}
                                <div className="news-modal-title-section">
                                    <h1>{selectedNews.title}</h1>
                                    <p className="news-modal-date">{selectedNews.date}</p>
                                </div>
                                
                                {/* 文章内容 */}
                                {selectedNews.content.map((item, index) => (
                                    <div key={index} className={`news-modal-${item.type}`}>
                                        {item.type === 'paragraph' && (
                                            <p>{item.text}</p>
                                        )}
                                        {item.type === 'title' && (
                                            <h2 className="news-modal-subtitle">{item.text}</h2>
                                        )}
                                        {item.type === 'image' && (
                                            <div className="news-modal-image-container">
                                                <Image 
                                                    src={item.src} 
                                                    alt={item.alt} 
                                                    width={600} 
                                                    height={400}
                                                    className="news-modal-image"
                                                />
                                                {item.caption && (
                                                    <p className="news-modal-image-caption">{item.caption}</p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </>
    );
} 