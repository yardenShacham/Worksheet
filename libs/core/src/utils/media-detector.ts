export class MediaDetector {

  private static isMatch(mediaQuery) {
    if (window)
      return window.matchMedia(mediaQuery).matches;
  }

  public static isMobile() {
    return this.isMatch('only screen and (max-width: 520px)');
  }

  public static isMainResponsive() {
    return this.isMatch('only screen and (max-width: 991px)');
  }

  public static isTablet() {
    return this.isMatch('only screen and (max-width: 1200px)');
  }

  public static isDesktop() {
    return this.isMatch('only screen and (min-width: 1024px)');
  }
}
