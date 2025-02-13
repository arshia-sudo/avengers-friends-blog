import React, { useState } from 'react';
import { Users, Quote, Image as ImageIcon, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const quotes = [
    { text: "True friendship isn’t about changing words to suit the moment; it’s about staying true to what was once said. (शब्दात बदल, बापट बदल)", author: "Tanmay" },
    { text: "We don’t need therapy, we just roast each other and move on!", author: "Ayushi" },
    { text: "We may forget what we studied, but we never forget each other’s embarrassing moments!", author: "Sakshi" }
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-red-900 text-white">
      {/* Header */}
      <header className="px-6 py-4 bg-black/30 backdrop-blur-sm fixed w-full z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-red-500" />
            <span className="text-xl font-bold">Avengers Assemble</span>
          </div>
          <ul className="hidden md:flex items-center gap-6">
            <li><a href="#memories" className="hover:text-red-400 transition">Memories</a></li>
            <li><a href="#quotes" className="hover:text-red-400 transition">Quotes</a></li>
            <li><a href="#gallery" className="hover:text-red-400 transition">Gallery</a></li>
            <li><a href="#friendship" className="hover:text-red-400 transition">Friendship</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Best Memories</h1>
          <p className="text-xl text-gray-300">Celebrating our memories together</p>
        </div>
      </section>

      {/* Memories Section */}
      <section id="memories" className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-xl">
            <img 
              src="/images/8.jpg"
              alt="Friends at sunset"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <p className="text-lg">"Friends got each other's backs, Together we are stronger!" - Tanmay</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl">
            <img 
              src="/images/17.jpg"
              alt="Concert crowd"
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <p className="text-lg">"Late-night coding sessions and laughter!" - Ayushi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-12 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Quote className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl font-bold">Quotes & Testimonials</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl mb-6">
            <p className="text-2xl italic mb-4">{quotes[currentQuote].text}</p>
            <p className="text-red-400">- {quotes[currentQuote].author}</p>
          </div>
          <button 
            onClick={nextQuote}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full transition"
          >
            Next Quote
          </button>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <ImageIcon className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl font-bold">Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/0.jpg",
              "/images/4.jpg",
              "/images/18.jpg",
              "/images/10.jpg",
              "/images/14.jpg",
              "/images/16.jpg",
              "/images/1.jpg",
              "/images/3.jpg",
              "/images/21.jpg",
              "/images/7.jpg",
              "/images/12.jpg",
              "/images/9.jpg"
            ].map((url, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl group">
                <img 
                  src={`${url}?auto=format&fit=crop&w=600`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Friendship Section */}
      <section id="friendship" className="py-12 px-6 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Heart className="h-8 w-8 text-red-500" />
            <h2 className="text-3xl font-bold">Friendship Never Ends</h2>
          </div>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              True friendship isn't about being inseparable, it's about being apart and nothing changes. 
              Through the ups and downs, the laughter and the tears, we've stayed together. No matter where life takes us, 
              our bond will remain unbreakable.
            </p>
            <p className="text-xl italic text-white">
              "A strong friendship doesn't need daily conversation or being together. As long as the relationship lives in the heart, true friends never part."
            </p>
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Foundation of Friendship: Trust</h3>
            <p>
              The foundation is trust. We have absolutely no doubt whatsoever in our friends, the real ones, that they will show up when we need them, 
              because they never have failed before. And it might not look like physically showing up; showing up takes all forms 
              whether it is over the phone or a well-timed hug.
            </p>
            <p>
              Our friendships have never required us to be in each other's pockets; we can go months without physically seeing each other, 
              without an obligation attached. But still there remains a deep knowing that we are not alone, ever. We are supported and loved, 
              always.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400">&copy; 2025 Avengers Assemble</p>
          <div className="flex items-center gap-6">
          
            <a href="https://www.instagram.com/avengers_tcoer?igsh=MTkxbGRpZjZzbWw3dw==" className="text-gray-400 hover:text-white transition">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;