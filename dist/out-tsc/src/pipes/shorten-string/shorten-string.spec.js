import { ShortenStringPipe } from '../../pipes/shorten-string/shorten-string';
describe('Pipe: ShortenStringPipe', function () {
    var pipe;
    beforeEach(function () {
        pipe = new ShortenStringPipe();
    });
});
it('should truncate a string if its too long (>20)', function () {
    // Arrange
    var pipe = new ShortenStringPipe();
    // Act
    var ret = pipe.transform('1234567890123456789012345', 20);
    // Assert
    expect(ret.length).toBeLessThanOrEqual(20);
});
//# sourceMappingURL=shorten-string.spec.js.map