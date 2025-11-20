'use client';

import { useState } from 'react';

interface Celebrity {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  responseTime: string;
  image: string;
}

const celebrities: Celebrity[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    category: 'Actor',
    description: 'Known for award-winning roles in drama series',
    price: 150,
    responseTime: '24hrs',
    image: '🎭'
  },
  {
    id: 2,
    name: 'Mike Rodriguez',
    category: 'Athlete',
    description: 'Olympic gold medalist and sports icon',
    price: 200,
    responseTime: '48hrs',
    image: '🏅'
  },
  {
    id: 3,
    name: 'Emma Chen',
    category: 'Musician',
    description: 'Grammy-winning pop artist',
    price: 300,
    responseTime: '24hrs',
    image: '🎤'
  },
  {
    id: 4,
    name: 'David Thompson',
    category: 'Comedian',
    description: 'Stand-up comedian and TV personality',
    price: 100,
    responseTime: '12hrs',
    image: '😄'
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    category: 'Reality TV',
    description: 'Star of popular reality show',
    price: 75,
    responseTime: '24hrs',
    image: '📺'
  },
  {
    id: 6,
    name: 'James Wilson',
    category: 'Athlete',
    description: 'Professional basketball player',
    price: 250,
    responseTime: '48hrs',
    image: '🏀'
  },
  {
    id: 7,
    name: 'Olivia Brown',
    category: 'Influencer',
    description: 'Lifestyle and fashion content creator',
    price: 80,
    responseTime: '12hrs',
    image: '📸'
  },
  {
    id: 8,
    name: 'Chris Anderson',
    category: 'Actor',
    description: 'Action movie star with 20+ films',
    price: 500,
    responseTime: '72hrs',
    image: '🎬'
  },
  {
    id: 9,
    name: 'Sophia Lee',
    category: 'Musician',
    description: 'Classical pianist and composer',
    price: 120,
    responseTime: '24hrs',
    image: '🎹'
  },
  {
    id: 10,
    name: 'Marcus Davis',
    category: 'Comedian',
    description: 'Viral comedy creator',
    price: 60,
    responseTime: '12hrs',
    image: '🎪'
  },
  {
    id: 11,
    name: 'Rachel Green',
    category: 'Reality TV',
    description: 'Winner of cooking competition show',
    price: 90,
    responseTime: '24hrs',
    image: '👨‍🍳'
  },
  {
    id: 12,
    name: 'Tyler Scott',
    category: 'Athlete',
    description: 'Professional soccer player',
    price: 180,
    responseTime: '48hrs',
    image: '⚽'
  }
];

const categories = ['All', 'Actor', 'Athlete', 'Musician', 'Comedian', 'Reality TV', 'Influencer'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCelebrities = celebrities.filter(celeb => {
    const matchesCategory = selectedCategory === 'All' || celeb.category === selectedCategory;
    const matchesSearch = celeb.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         celeb.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="logo">Cameo</div>
          <nav className="nav">
            <a href="#browse">Browse</a>
            <a href="#business">For Business</a>
            <a href="#join">Join Cameo</a>
            <button className="btn-primary">Sign In</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>Get personalized videos from your favorite people</h1>
          <p>Book a personalized video message for any occasion</p>

          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for celebrities, athletes, actors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        <section className="categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        <section className="celebrities-grid">
          {filteredCelebrities.map(celebrity => (
            <div key={celebrity.id} className="celebrity-card">
              <div
                className="celebrity-image"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '120px'
                }}
              >
                {celebrity.image}
              </div>
              <div className="celebrity-info">
                <div className="celebrity-name">{celebrity.name}</div>
                <div className="celebrity-category">{celebrity.category}</div>
                <div className="celebrity-description">{celebrity.description}</div>
                <div className="celebrity-stats">
                  <span className="response-time">⏱️ {celebrity.responseTime}</span>
                  <span className="price">${celebrity.price}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#press">Press</a>
          </div>
          <div className="footer-section">
            <h3>Support</h3>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact Us</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <a href="#terms">Terms of Service</a>
            <a href="#privacy">Privacy Policy</a>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
          </div>
        </div>
      </footer>
    </>
  );
}
