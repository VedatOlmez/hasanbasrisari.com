import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="kurumsal">
        <Container>
          <Grid>
            <div>
              <h2>KURUMSAL</h2>
              <p>
              Avukat Hasan Basri Sarı Konya Hukuk Bürosu, çeşitli hukuk bürolarında avukatlık yaptıktan sonra kendi avukatlık ve hukuk bürosunu kurmuştur. Bu süreçten günümüze kadar özellikle Ağır Ceza Avukatı, Ceza Avukatı, Boşanma Avukatı, Miras Avukatı, Trafik Kazası Avukatı, Uyuşturucu Suçları Avukatı, Ticaret Hukuk ve İcra, İflas Hukuku alanında uzmanlaşmış bir avukatlık bürosudur.
              </p>
              <br></br>
              <p>
              Başlanan hukuksal sürecin her aşamasında müvekkili bilgilendirme prensibiyle hareket ederek hizmet veren bir hukuk ve danışmanlık ofisidir.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <p>
              • Müvekkil şirketlerin ticaret ve iş hukuku uyuşmazlıklarında avukatlık hizmetleri vermekte, ayrıca icra ve iflas takiplerini de yürütmektedir.
              <br></br><br></br>
• Çalışmalarımızda ve hizmetlerimizde teknolojinin en gelişmiş ve en son imkanları en iyi şekilde kullanılmakta ve periyodik raporlama ile müvekkiller sürekli bilgilendirilmektedir.
<br></br><br></br>
• Sistemli ve en son iletişim teknolojilerinden faydalanarak hukuki süreç hızlandırılmaktadır.
<br></br><br></br>
• Amacımız hukuki sorunları mümkün olduğunca dava konusu olmadan hızlı bir şekilde çözmektir.
<br></br><br></br>
• Müvekkillerine en üst düzeyde hizmet sunma anlayışı ile gerekli her türlü çabayı sarf eden Avukat Hasan Basri Hukuk Bürosu gerektiğinde, konusunda uzman olan akademisyen hukukçulardan da takip edilen işlerle ilgili olarak destek almaktadır.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <p>
              • Avukat Hasan Basri Sarı Konya Hukuk Bürosu başarısını sağlayan temel etkenlerden birinin eğitilmiş çalışanlar olduğuna inanarak, büromuzda personel eğitimine ağırlık verilmektedir.
              <br></br><br></br>
• Müvekkil şirketlerin finansal gücünü koruması ve arttırması için, alacak takibindeki başarısının temeli de iyi eğitilmiş muhasebe, satış ve pazarlama personelleridir. Bu sebeple Avukat Hasan Basri Sarı Hukuk Bürosu, söz konusu personellerin icra ve alacak takibi konusunda eğitimine yardımcı olmaktadır.
<br></br><br></br>
• Avukat Hasan Basri Sarı Konya Hukuk Bürosu takiplerini yürütürken, borçlularını tamamen hukuki ve seviyeli bir şekilde ödemeye ikna etmek konusunda uzmanlaşmıştır. Bu hassasiyet , hem müvekkil hem borçlu anlamında doğabilecek sorunları ve müvekkillerin marka değerini korumak anlamında geliştirilmiş bulunmaktadır.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
