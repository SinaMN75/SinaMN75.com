import apptech from '../assets/svg/companies/apptech.png'
import avreen from '../assets/svg/companies/avreen.png'
import ayande from '../assets/svg/companies/ayande.png'
import classgram from '../assets/svg/companies/classgram.jpg'
import expostone from '../assets/svg/companies/expostone.png'
import gitikala from '../assets/svg/companies/gitikala.png'
import iranzamin from '../assets/svg/companies/iranzamin.png'
import jadoo from '../assets/svg/companies/jadoo.png'
import medgram from '../assets/svg/companies/medgram.png'
import mehr from '../assets/svg/companies/mehr.png'
import pn from '../assets/svg/companies/pn.png'
import post from '../assets/svg/companies/post.png'
import practino from '../assets/svg/companies/practino.png'
import pulsepay from '../assets/svg/companies/pulsepay.png'
import scimed from '../assets/svg/companies/scimed.png'
import tarotamiz from '../assets/svg/companies/tarotamiz.png'


export const companiesImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'ayande':
            return ayande;
        case 'jadoo':
            return jadoo;
        case 'practino':
            return practino;
        case 'pulsepay':
            return pulsepay;
        case 'avreen':
            return avreen;
        case 'gitikala':
            return gitikala;
        case 'iranzamin':
            return iranzamin;
        case 'classgram':
            return classgram;
        case 'post':
            return post;
        case 'mehr':
            return mehr;
        case 'medgram':
            return medgram;
        case 'expostone':
            return expostone;
        case 'pn':
            return pn;
        case 'scimed':
            return scimed;
        case 'tarotamiz':
            return tarotamiz;
        case 'apptech':
            return apptech;
        default:
            break;
    }
}
