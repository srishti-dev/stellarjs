import eio from 'engine.io-client';
import stellarSocketFactory from './stellarSocket';

const stellarSocket = new stellarSocketFactory(eio);
export default stellarSocket;
