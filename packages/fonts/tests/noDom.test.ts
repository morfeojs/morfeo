/**
 * Jest Test Environment changed to Node to test
 * the case `@morfeo/fonts` package is executed in the server.
 *
 * @jest-environment node
 */
import { mountFont } from '../src';

describe('mountFont when document is not definined', () => {
  describe('when document is not defined', () => {
    test('should not fail', () => {
      mountFont({ name: 'should-not-be-added' } as any);
    });
  });
});
