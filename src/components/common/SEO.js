import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Av. Hasan Sabri Sarı | Konya Avukat, Konya Avukatları, Konya Hukuk Bürosu, Konya Hukuk Büroları, Konya Boşanma Avukatı, Konya Boşanma Avukatları, Konya İcra Avukatı, Konya İş Hukuku Avukatı, Konya Ceza Avukatı, Konya Ağır Ceza Avukatı, Konya Ağır Ceza Avukatları, Konya Miras Avukatı, Konya Tazminat Avukatı, Konya Uyuşturucu Davasına Bakan Avukatlar, Konya Uyuşturucu Avukatı, Konya Barosu Avukatları, Konya Trafik Kazası Avukatı',
  title: 'Av. Hasan Sabri Sarı | Konya Avukat, Konya Avukatları, Konya Hukuk Bürosu, Konya Hukuk Büroları, Konya Boşanma Avukatı, Konya Boşanma Avukatları, Konya İcra Avukatı, Konya İş Hukuku Avukatı, Konya Ceza Avukatı, Konya Ağır Ceza Avukatı, Konya Ağır Ceza Avukatları, Konya Miras Avukatı, Konya Tazminat Avukatı, Konya Uyuşturucu Davasına Bakan Avukatlar, Konya Uyuşturucu Avukatı, Konya Barosu Avukatları, Konya Trafik Kazası Avukatı  ',
  url: '',
  author: 'Av. Hasan Basri Sarı',
  keywords: ['konya avukat', 'konya avukatları', 'konya hukuk bürosu', 'konya hukuk büroları', 'konya boşanma avukatı', 'konya boşanma avukatları', 'konya icra avukatı', 'konya iş hukuku avukatı', 'konya ceza avukatı', 'konya ağır ceza avukatı', 'konya ağır ceza avukatları', 'konya miras avukatı', 'konya tazminat avukatı', 'konya uyuşturucu davasına bakan avukatlar', 'konya uyuşturucu avukatı', 'konya barosu avukatları', 'konya trafik kazası avukatı'],
  img: '',
  twitterId: '@',
  facebookId: '',
};

const SEO = () => {
  return (
    <Helmet>
      <meta property="fb:app_id" content={SEO_DATA.facebookId} />
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:image" content={SEO_DATA.img} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={SEO_DATA.twitterId} />
      <meta name="twitter:site" content={SEO_DATA.url} />
      <meta name="twitter:title" content={SEO_DATA.title} />
      <meta name="twitter:description" content={SEO_DATA.description} />
      <meta name="twitter:domain" content={SEO_DATA.url} />
      <meta name="twitter:image:src" content={SEO_DATA.img} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="tr" />
    </Helmet>
  );
};

export default SEO;
