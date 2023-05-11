/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines */
/* eslint-disable max-len */
import VW1600 from './images/1600.jpg';
import TL from './images/1600tl.jpg';
import Aero from './images/aerowillys.jpg';
import Belina from './images/belina.jpg';
import Brasilia from './images/brasilia.jpg';
import C10 from './images/c10.jpg';
import Charger from './images/charger.jpg';
import Chevette from './images/chevette.jpg';
import Corcel from './images/corcel.jpg';
import DKW from './images/dkw.jpg';
import F147 from './images/fiat_147.jpg';
import Fusca from './images/fusca.jpg';
import Galaxie from './images/galaxie.jpg';
import Gordini from './images/gordini.jpg';
import Isetta from './images/isetta.jpg';
import Karmann from './images/karmann.jpg';
import Kombi from './images/kombi.jpg';
import Maverick from './images/maverick.jpg';
import Opala from './images/opala.jpg';
import Passat from './images/passat.jpg';
import Puma from './images/puma.jpg';
import Rural from './images/rural.jpg';
import Simca from './images/simca.jpg';
import SP2 from './images/sp2.jpg';
import Variant from './images/variant.jpg';
import Veraneio from './images/veraneio.jpg';

export default
[
  {
    name: 'Fusca',
    description: 'Primeiro carro produdizo pela companhia alemã Volkswagen',
    attributes: { velocidade: 133, peso: 780, comprimento: 4 },
    image: Fusca,
    rarity: { normal: true, raro: false, muitoRaro: false },
    isTrunfo: true,
    license: { name: 'CC', author: 'Vwexport1300', link: 'https://creativecommons.org/licenses/by-sa/3.0/deed.en' },
  },
  {
    name: 'Brasilia',
    description: 'Foi um dos primeiros Volkswagen a serem projetados e construídos no Brasil',
    attributes: { velocidade: 138, peso: 890, comprimento: 4.2 },
    image: Brasilia,
    rarity: { normal: true, raro: false, muitoRaro: false },
    isTrunfo: false,
    license: { name: '', author: '', link: '' },
  },
  {
    name: 'Maverick',
    description: 'Criado pela Ford dos Estados Unidos, que obteve relativo sucesso em seu país de origem ',
    attributes: { velocidade: 182, peso: 1390, comprimento: 4.5 },
    image: Maverick,
    rarity: { normal: false, raro: false, muitoRaro: true },
    isTrunfo: false,
    license: { name: '', author: '', link: '' },
  },
  {
    name: 'VW 1600',
    description: 'Suas formas retangulares lhe renderam o curioso apelido de "Zé do Caixão"',
    attributes: { velocidade: 131, peso: 925, comprimento: 4.1 },
    image: VW1600,
    rarity: { normal: false, raro: true, muitoRaro: false },
    isTrunfo: false,
    license: { name: '', author: '', link: '' },
  },
  {
    name: 'VW 1600 TL',
    description: 'Foi eleito pela Revista Autoesporte o Carro do Ano de 1971.',
    attributes: { velocidade: 139, peso: 920, comprimento: 4.3 },
    image: TL,
    rarity: { normal: false, raro: true, muitoRaro: false },
    isTrunfo: false,
    license: { name: '', author: '', link: '' },
  },
  {
    name: 'Aero Willys',
    description: 'Foi fabricado pela Willys Overland do Brasil entre 1960 e 1971.',
    attributes: { velocidade: 120, peso: 1440, comprimento: 4.6 },
    image: Aero,
    rarity: { normal: false, raro: false, muitoRaro: true },
    isTrunfo: false,
    // eslint-disable-next-line sonarjs/no-duplicate-string
    license: { name: 'CC', author: 'Renzo Maia', link: 'https://creativecommons.org/licenses/by/3.0/deed.en' },
  },
  {
    name: 'Belina',
    description: 'Lançada em 1970 e descontinuada em 1991, ela era pertencente a família do Corcel',
    attributes: { velocidade: 129, peso: 980, comprimento: 4.4 },
    image: Belina,
    rarity: { normal: false, raro: true, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'Bruno Kussler Marques', link: 'https://creativecommons.org/licenses/by/2.0' },
  },
  {
    name: 'C-10',
    description: 'É a segunda linha de picapes que a GM produziu no Brasil, entre 1964 e 1997',
    attributes: { velocidade: 130, peso: 1570, comprimento: 4.8 },
    image: C10,
    rarity: { normal: true, raro: false, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'Joost J. Bakker', link: 'https://creativecommons.org/licenses/by/2.0' },
  },
  {
    name: 'Charger R/T',
    description: 'O modelo Charger R/T foi descontinuado em 1980 devido ao baixo número de vendas',
    attributes: { velocidade: 180, peso: 1525, comprimento: 4.9 },
    image: Charger,
    rarity: { normal: false, raro: false, muitoRaro: true },
    isTrunfo: false,
    license: { name: 'CC', author: 'Sicnag', link: 'https://creativecommons.org/licenses/by/2.0/deed.en' },
  },
  {
    name: 'Chevette',
    description: 'Lançado na década de 70, o Chevette tornou-se um dos mais populares veículos produzidos pela GM no Brasil.',
    attributes: { velocidade: 140, peso: 880, comprimento: 4.1 },
    image: Chevette,
    rarity: { normal: true, raro: false, muitoRaro: false },
    isTrunfo: false,
    // eslint-disable-next-line sonarjs/no-duplicate-string
    license: { name: 'CC', author: 'Renzo Maia', link: 'https://creativecommons.org/licenses/by/3.0' },
  },
  {
    name: 'Corcel',
    description: 'Eleito pela revista Autoesporte o Carro do Ano em 1969, 1973 e 1979.',
    attributes: { velocidade: 133, peso: 943, comprimento: 4.4 },
    image: Corcel,
    rarity: { normal: true, raro: false, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'Renzo Maia', link: 'https://creativecommons.org/licenses/by/3.0' },
  },
  {
    name: 'Belcar',
    description: 'Foi um automóvel brasileiro produzido pela Vemag, sob licença da fábrica alemã DKW, entre 1958 e 1967',
    attributes: { velocidade: 125, peso: 940, comprimento: 4.4 },
    image: DKW,
    rarity: { normal: false, raro: true, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'JasonVogel', link: 'JasonVogel' },
  },
  {
    name: 'Fiat 147',
    description: 'Primeiro carro produzido pela FIAT do Brasil que inaugurava sua fábrica em Betim (MG) em 1976,',
    attributes: { velocidade: 140, peso: 796, comprimento: 3.6 },
    image: F147,
    rarity: { normal: true, raro: false, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'Marcelo Bezerra Cavalcanti', link: 'https://creativecommons.org/licenses/by/3.0' },
  },
  {
    name: 'Galaxie',
    description: 'É considerado pelos antigomobilistas o carro mais luxuoso do Brasil.',
    attributes: { velocidade: 160, peso: 1854, comprimento: 5.4 },
    image: Galaxie,
    rarity: { normal: false, raro: false, muitoRaro: true },
    isTrunfo: false,
    license: { name: 'CC', author: 'Morven ', link: 'http://creativecommons.org/licenses/by-sa/3.0/' },
  },
  {
    name: 'Gordini',
    description: 'Ganhou o apelido "Leite Glória", baseado no slogan da época a frase "Desmancha sem bater"',
    attributes: { velocidade: 135, peso: 780, comprimento: 3.9 },
    image: Gordini,
    rarity: { normal: false, raro: true, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'Rutger van der Maar', link: 'https://creativecommons.org/licenses/by/2.0' },
  },
  {
    name: 'Romi-Isetta',
    description: 'Produzido no Brasil, entre 1956 e 1961, pelas Indústrias Romi S.A., com sede em Santa Bárbara d\'Oeste, interior de São Paulo.',
    attributes: { velocidade: 85, peso: 350, comprimento: 2.2 },
    image: Isetta,
    rarity: { normal: false, raro: false, muitoRaro: true },
    isTrunfo: false,
    license: { name: 'CC', author: 'Thesupermat', link: 'https://creativecommons.org/licenses/by-sa/3.0' },
  },
  {
    name: 'Karmann-Ghia',
    description: 'Produzido pela Volkswagen, projetado pela empresa italiana Carrozzeria Ghia, e construído pela empresa alemã Karmann',
    attributes: { velocidade: 139, peso: 830, comprimento: 4.1 },
    image: Karmann,
    rarity: { normal: false, raro: false, muitoRaro: true },
    isTrunfo: false,
    license: { name: 'CC', author: 'Calreyn88', link: 'https://creativecommons.org/licenses/by-sa/4.0' },
  },
  {
    name: 'Kombi',
    description: 'No Brasil, foi fabricada ininterruptamente entre 2 de setembro de 1957 e 18 de dezembro de 2013.',
    attributes: { velocidade: 100, peso: 1297, comprimento: 4.5 },
    image: Kombi,
    rarity: { normal: true, raro: false, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'kitmasterbloke', link: 'https://creativecommons.org/licenses/by/2.0' },
  },
  {
    name: 'Opala',
    description: 'Fabricado pela GM do Brasil, sendo o primeiro veículo de passeio da montadora no país, produzido de 1968 a 1992.',
    attributes: { velocidade: 170, peso: 1125, comprimento: 4.5 },
    image: Opala,
    rarity: { normal: false, raro: true, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'Niemann333', link: 'https://creativecommons.org/licenses/by-sa/4.0' },
  },
  {
    name: 'Passat',
    description: 'Sua introdução em 1973 foi decisiva, pois as vendas do Volkswagen Fusca estavam caindo, ',
    attributes: { velocidade: 150, peso: 910, comprimento: 4.1 },
    image: Passat,
    rarity: { normal: true, raro: false, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'BBence64', link: 'https://creativecommons.org/licenses/by-sa/4.0' },
  },
  {
    name: 'Puma GTE',
    description: 'Produzido com carroceria de fibra de vidro e mecânica Volkswagen boxer entre os anos de 1970 e 1980',
    attributes: { velocidade: 158, peso: 785, comprimento: 4 },
    image: Puma,
    rarity: { normal: false, raro: false, muitoRaro: true },
    isTrunfo: false,
    license: { name: 'CC', author: 'Uploader\'s brother', link: 'https://creativecommons.org/licenses/by-sa/3.0' },
  },
  {
    name: 'Rural',
    description: 'Lançado nos Estados Unidos em 1946 com o nome de Jeep Station Wagon',
    attributes: { velocidade: 132, peso: 1418, comprimento: 4.5 },
    image: Rural,
    rarity: { normal: false, raro: true, muitoRaro: false },
    isTrunfo: false,
    license: { name: '', author: '', link: '' },
  },
  {
    name: 'Simca Chambord',
    description: ' Foi o primeiro automóvel de luxo a ser construído no Brasil sob licença, desde 1959 até 1967',
    attributes: { velocidade: 140, peso: 1215, comprimento: 4.7 },
    image: Simca,
    rarity: { normal: false, raro: false, muitoRaro: true },
    isTrunfo: false,
    license: { name: 'CC', author: 'Charles01', link: 'https://creativecommons.org/licenses/by-sa/3.0' },
  },
  {
    name: 'SP2',
    description: 'A série SP foi uma série de carros esporte desenvolvidos pela Volkswagen do Brasil para o mercado interno, de 1972 a 1976',
    attributes: { velocidade: 161, peso: 890, comprimento: 4.2 },
    image: SP2,
    rarity: { normal: false, raro: false, muitoRaro: true },
    isTrunfo: false,
    license: { name: 'CC', author: 'Arild Vågen', link: 'https://creativecommons.org/licenses/by-sa/4.0' },
  },
  {
    name: 'Variant',
    description: 'Station Wagon derivada dos modelos VW 1600',
    attributes: { velocidade: 135, peso: 950, comprimento: 4.3 },
    image: Variant,
    rarity: { normal: false, raro: true, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'Bruno Kussler Marques', link: 'https://creativecommons.org/licenses/by/2.0' },
  },
  {
    name: 'Veraneio',
    description: 'Inicialmente, chamava-se C-1416 (nome usado até 1969). O modelo dispunha de quatro portas e podia acomodar até 09 (nove) pessoas',
    attributes: { velocidade: 142, peso: 2000, comprimento: 5.1 },
    image: Veraneio,
    rarity: { normal: false, raro: true, muitoRaro: false },
    isTrunfo: false,
    license: { name: 'CC', author: 'order_242 ', link: 'https://creativecommons.org/licenses/by-sa/2.0' },
  },

];
