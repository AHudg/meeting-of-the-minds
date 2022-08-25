const { fixDate } = require('../utils/helpers')

test('format_date() returns a date string', () => {
    const date = new Date('08-25-2022');

    expect(fixDate(date)).toBe('August 25, 2022');
});