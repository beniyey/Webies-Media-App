class IntersectionService {
  public callback: Function;
  public iterator: React.MutableRefObject<HTMLDivElement>[];
  public observer: IntersectionObserver;

  public constructor(callback: Function , iterator: React.MutableRefObject<HTMLDivElement>[]) {
    this.callback = callback;
    this.iterator = iterator;
  }

  public init() {
    const options = {
      rootMargin: "0px",
      threshold: 0.25,
    };

    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.callback(entry);
        } else {
          this.callback(entry, false);
        }
      });
    }, options);

    this.iterator.forEach((element, index) => {
      if (element) {
        this.observer.observe(element.current);
      }
    });
  }

  public cleanup() {
    this.iterator.forEach((element) => {
      if (element) {
        this.observer.unobserve(element.current);
      }
    });
  }
}

export default IntersectionService;
