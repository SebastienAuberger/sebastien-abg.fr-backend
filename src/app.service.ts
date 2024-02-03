import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAbout(): string {
    return "Je m'apelle Sébastien, j'ai 26 ans, je suis développeur informatique, j'ai obtenu un BTS SN ainsi que ma Licence d'informatique, ce qui fait de moi quelqu'un de polyvalent dans le domaine ^^. J'ai toujours aimé ce domaine et eu une fascination pour les nouvelles technologies et jusqu'ou elle pouvaient nous emmener. Pour en savoir plus sur moi je t'invite à me suivre sur les réseaux et à regarder le reste de ce site ;)";
  }
}
