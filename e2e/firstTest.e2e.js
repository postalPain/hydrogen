describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should true be equal of true', async () => {
    await expect(element(by.text("HomeScreen"))).toBeVisible();
  });
});
