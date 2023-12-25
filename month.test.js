const getMonth = require('./month');
describe('test of month selection', () => {
it('month selection from 1 to 12', () => expect(getMonth(3)).toBe('март')),
it('month selection str', () => expect(getMonth('число')).toBe('введите число')),
it('month selection not from 1 to 12', () => expect(getMonth(13)).toBe('неизвестно'))
});

