import React, { useState } from 'react';

const MemeGenerator = () => {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1bij.jpg');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would generate the meme here
    alert('Meme generated! (Not really, but imagine it was)');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-yellow">Meme Generator Demo</h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="topText" className="block text-sm font-medium text-gray-300">Top Text</label>
              <input
                type="text"
                id="topText"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-accent-yellow focus:border-accent-yellow"
              />
            </div>
            <div>
              <label htmlFor="bottomText" className="block text-sm font-medium text-gray-300">Bottom Text</label>
              <input
                type="text"
                id="bottomText"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-accent-yellow focus:border-accent-yellow"
              />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-charcoal bg-accent-yellow hover:bg-accent-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-yellow">
              Generate Meme
            </button>
          </form>
          <div className="mt-8 relative">
            <img src={memeImage} alt="Meme" className="w-full rounded-lg" />
            <h2 className="absolute top-4 left-0 w-full text-center text-white text-3xl font-bold uppercase">{topText}</h2>
            <h2 className="absolute bottom-4 left-0 w-full text-center text-white text-3xl font-bold uppercase">{bottomText}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemeGenerator;