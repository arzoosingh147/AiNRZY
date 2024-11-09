
import axios from 'axios';

const fetchNews = async () => {
  try {
    const response = await axios.get('https://newsdata.io/api/1/news', {
      params: {
        apikey: 'pub_45946fd3162ebc55e4445550027aec4eb6793',
        language: 'en',
        country: 'us',
        category: 'technology'
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch news:', error.message);
    return [];
  }
};

const ChainGpt = async () => {
  const newsArticles = await fetchNews();

  return (
    <section className="w-full flex justify-center items-center px-5 py-36 lg:py-40">
      <div className="flex flex-col justify-center items-center gap-3 w-[80vw] md:w-[60vw]">
        <h1 className="text-5xl font-semibold text-slate-200 text-center">Latest Technology News</h1>
        <h2 className="font-medium text-xl text-slate-300 text-center">Discover the most recent tech innovations and trends with our latest technology news, powered by real-time API updates</h2>
        <ul className="flex flex-col gap-5 mt-7 w-full">
          {newsArticles.map((article, index) => (
            <li key={index} className="bg-gray-800 p-5 rounded-lg card">
              <h2 className="text-2xl font-semibold text-slate-200">{article.title}</h2>
              <p className="text-slate-300">{article.description}</p>
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-500 hover:text-sky-400 transition ease-in-out"
              >
                Read more
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ChainGpt;