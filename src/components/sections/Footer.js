import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';

const SOCIAL = [
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>        
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
            <h2>İLETİŞİM</h2>
              <div>
                <p>
                  <b>Adres:</b><br />
                  <a href='https://g.page/hasanbasrisari?share'>
                  Feritpaşa Mh. Ulaşbaba Cd. Mustafa Kaya İş Merkezi No 24 Daire 301<br />Selçuklu/KONYA<br />
                  </a>
                  <br /><b>Telefon:</b>
                  <br /><a href="tel://+903322341411">0(332) 234 14 11</a><br />
                  <a href="tel://+905546706058">0(554) 670 60 58</a>
                </p>
              </div>
              <h2>Av. Hasan Basri Sarı</h2>
              <span>
              © 2020 | SEO Uzmanı
                {` `}
                <ExternalLink href="https://www.vedatolmez.com/">
                  Vedat Ölmez
                </ExternalLink>
              </span>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
