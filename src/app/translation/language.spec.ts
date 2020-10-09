import { Language } from './language';

describe('Language', () => {
  it('should create an instance', () => {
    expect(new Language()).toBeTruthy();
  });

  it('should have #deserialize function', () => {
    expect(new Language().deserialize).toBeTruthy();
  });
});
