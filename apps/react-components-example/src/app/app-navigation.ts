import {IHeaderNode} from '@Worksheet/shared-models';
import {MediaDetector} from '@Worksheet/core';

const navigationOption: IHeaderNode[] = [
  {
    nodeUrl: '/',
    imageUrl: 'assets/icon.jpg'
  },
  {
    nodeUrl: '/',
    nodeLabelName: 'Home'
  },
  {
    nodeUrl: 'https://github.com/yardenShacham',
    nodeLabelName: 'Github'
  },
  {
    nodeUrl: 'https://il.linkedin.com/in/yarden-shcham-087163b3',
    nodeLabelName: 'Linkedin'
  },
  {
    nodeUrl: null,
    nodeLabelName: 'yarden101111@gmail.com'
  }
];

const nvigationOptionMobile: IHeaderNode[] = [
  {
    nodeUrl: '/',
    imageUrl: 'assets/icon.jpg'
  },
  {
    nodeUrl: 'https://github.com/yardenShacham',
    iconClassName: 'icon-github'
  },
  {
    nodeUrl: 'https://il.linkedin.com/in/yarden-shcham-087163b3',
    iconClassName: 'icon-linkedin-squared'
  },
  {
    nodeUrl: 'https://il.linkedin.com/in/yarden-shcham-087163b3',
    iconClassName: 'icon-mail'
  }
];

export const getNavigationOptions =
  () => MediaDetector.isMobile() ? nvigationOptionMobile : navigationOption;
