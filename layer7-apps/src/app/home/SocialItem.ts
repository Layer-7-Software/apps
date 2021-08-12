import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

export class SocialItem {
  href: string;
  icon: IconProp;

  constructor() {
    this.href = '';
    this.icon = faQuestionCircle;
  }
}
