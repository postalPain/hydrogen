describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp({ permissions: {notifications: 'YES'} });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should true be equal of true', async () => {
    await expect(element(by.text("xxx"))).toNotExist();
  });
});
