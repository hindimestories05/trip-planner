import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div className="tour-page">
      <h3 id='title-blog'>Blogs</h3>
      <div className="grid-container">
        <div className="grid-item">
          <h3>Welcome To Our Travel Blog</h3>
          <p>Welcome to the india for Beginners travel blog It’s been a while since I started a new travel blog. Some long-time followers may know, I started travel blogging in India in 2005 – which makes me one of the very first travel bloggers. This was at the very beginning of travel blogging, and very early…</p>
          <button >Read More...</button>
        </div>
        <div className="grid-item">
          <h3>Shopping Tours In Jaipur And Delhi</h3>
          <p>India is a shopper’s paradise. Markets, malls, and bazaars burst with beautiful merchandise, much of it handmade, unique, and culturally significant. Visiting markets in India is a cultural activity that is also fun and can be a great way to get to know local neighbourhoods. I love shopping in India and especially in Jaipur and…</p>
          <button >Read More...</button>
        </div>
        <div className="grid-item">
          <h3>A Place Of Transformation, Part 2</h3>
          <p>By Leslie Hanes Part 2 of photographer Leslie Hanes’ trip to India with India for Beginners. Please see A Place of Transformation, Part 1 here. Part 2: Elephants, horses, and camels, oh my!  There are three symbolic animals that you encounter in India and they are often depicted in the miniature paintings you find in…</p>
          <button >Read More...</button>
        </div>
        <div className="grid-item">
          <h3>The Basics About Travel In India</h3>
          <p>There’s a lot to learn about travel in India, from what to wear, to how to book trains, to preventing Delhi belly. There is nowhere like India. Even if you’ve travelled extensively in Asia, India is different. There is a steep learning curve to travel in India, a lot you need to learn, until you…</p>
          <button >Read More...</button>
        </div>
        <div className="grid-item">
          <h3>Tips For Women Travellers</h3>
          <p>Travel in India is not for everyone. But if you do feel called to India, I wouldn’t hesitate. I would, however, prepare, do research, and practise “safe travel strategies.” In some ways, India is like the Mount Everest of travel. It is often seen as the most challenging, and ultimately most rewarding, place to travel….</p>
          <button >Read More...</button>
        </div>
        <div className="grid-item">
          <h3>Spring: Tigers</h3>
          <p>Spring is a great time to visit India, especially for wildlife viewing and tiger spotting.</p>
          <button >Read More...</button>
        </div>
        <div className="grid-item">
          <h3>Winter: Beaches</h3>
          <p>During winter, India’s tropical beaches are the place to be! Head to Goa, Kerala or other beautiful beaches found along India’s very long coastline.</p>
          <button >Read More...</button>
        </div>
        <div className="grid-item">
          <h3>Ellora And Ajanta Caves</h3>
          <p>Imagine discovering hidden caves in the middle of nowhere that contain priceless artworks from a thousand years ago? In Central India you can actually find one such spot — and you do not want to miss it.</p>
          <button >Read More...</button>
        </div>
        <div className="grid-item">
          <h3>Kumbalgarh Fort</h3>
          <p>Kumbalgarh Fort is India’s second largest fort — and one of the world’s largest fort complexes. Kumbalgarh is a UNESCO World Heritage site near Udaipur, Rajasthan and a must-visit while in North India.</p>
          <button >Read More...</button>
        </div>
        <div className="grid-item">
          <h3>Kumaon, Uttarakhand</h3>
          <p>Kumaon is a hilly region of the northern Indian state of Uttarakhand. The name Kumaon conjures up vivid images of tranquil hill stations, mountain lakes, towering Himalayan peaks, and thick forests that are the preserve of the majestic Bengal tiger.</p>
          <button >Read More...</button>
        </div>
        {/* Add more grid items as needed */}
      </div>
    </div>
  );
};

export default Blog;
