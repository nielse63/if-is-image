
import ifIsImage from '../../../';

export default function IndexSpec() {
  describe('sanity', () => {
    it('should be a function', () => {
      expect(ifIsImage).to.be.a.function;
    });

    it('should return a boolean', () => {
      expect(ifIsImage('something')).to.be.a.boolean;
    });
  });

  describe('happy path', () => {
    it('should pass on .jpg', () => {
      expect(
        ifIsImage('path/file.jpg'),
      ).to.be.true;
    });

    it('should pass on .jpeg', () => {
      expect(
        ifIsImage('path/file.jpeg'),
      ).to.be.true;
    });

    it('should pass on .png', () => {
      expect(
        ifIsImage('path/file.png'),
      ).to.be.true;
    });

    it('should pass on .gif', () => {
      expect(
        ifIsImage('path/file.gif'),
      ).to.be.true;
    });

    it('should pass on .svg', () => {
      expect(
        ifIsImage('path/file.svg'),
      ).to.be.true;
    });
  });

  describe('sad path', () => {
    it('should not pass on .txt', () => {
      expect(
        ifIsImage('path/file.txt'),
      ).to.be.false;
    });

    it('should not pass on .jrp', () => {
      expect(
        ifIsImage('path/file.jrp'),
      ).to.be.false;
    });

    it('should not pass on .md', () => {
      expect(
        ifIsImage('path/file.md'),
      ).to.be.false;
    });
  });

  describe('bad path', () => {
    it('throw for array', () => {
      expect(
        ifIsImage.bind(null, []),
      ).to.throw();
    });

    it('throw for number', () => {
      expect(
        ifIsImage.bind(null, 1),
      ).to.throw();
    });

    it('throw for object', () => {
      expect(
        ifIsImage.bind(null, {}),
      ).to.throw();
    });
  });
}
