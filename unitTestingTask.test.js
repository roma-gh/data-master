const handle = require('./unitTestingTask')

describe("UnitTestingTask", () => {
    describe('Test coverage: Check available ISO formats', () => {
        it.each([
            {format: 'ISODate', date: '2023-05-01T11:03:42.209Z', result: '2023-05-01'},
            {format: 'ISOTime', date: '2023-05-01T11:03:42.209Z', result: '03:03:42'},
            {format: 'ISODateTime', date: '2023-05-01T11:03:42.209Z', result: '2023-05-01T03:03:42'},
            {format: 'ISODateTimeTZ', date: '2023-05-01T11:03:42.209Z', result: '2023-05-01T03:03:42+04:00'},
        ])('Should return $result for $date when iso format is $format', ({format, date, result}) => {
            expect(handle(format, date)).toEqual(result);
        })
    })

    describe('Test coverage: Error exceptions', () => {
        it("Should throw a TypeError if format is null", () => {
            expect(() => handle(null)).toThrow('Argument `format` must be a string')
        })
        it("Should throw a TypeError if format is undefined", () => {
            expect(() => handle(undefined)).toThrow('Argument `format` must be a string')
        })
        it("Should throw a TypeError if format isn't a string", () => {
            expect(() => handle(3)).toThrow('Argument `format` must be a string')
        })
        it('Should throw a TypeError if date argument is invalid', () => {
            expect(() => handle('DD', null)).toThrow('Argument `date` must be instance of Date or Unix Timestamp or ISODate String')
        })
    })

    describe("Test Coverage: Check available non ISO formats", () => {
        it.each([
            {format: 'YYYY', date: '2023-05-01T11:03:42.209Z', result: '2023'},
            {format: 'YY', date: '2023-05-01T11:03:42.209Z', result: '23'},
            {format: 'MMMM', date: '2023-05-01T11:03:42.209Z', result: 'May'},
            {format: 'MMM', date: '2023-05-01T11:03:42.209Z', result: 'May'},
            {format: 'MM', date: '2023-05-01T11:03:42.209Z', result: '05'},
            {format: 'M', date: '2023-05-01T11:03:42.209Z', result: '5'},
            {format: 'DDD', date: '2023-05-01T11:03:42.209Z', result: 'Monday'},
            {format: 'DD', date: '2023-05-01T11:03:42.209Z', result: 'Mon'},
            {format: 'D', date: '2023-05-01T11:03:42.209Z', result: 'Mo'},
            {format: 'dd', date: '2023-05-01T11:03:42.209Z', result: '01'},
            {format: 'd', date: '2023-05-01T11:03:42.209Z', result: '1'},
            {format: 'HH', date: '2023-05-01T11:03:42.209Z', result: '15'},
            {format: 'H', date: '2023-05-01T11:03:42.209Z', result: '15'},
            {format: 'hh', date: '2023-05-01T11:03:42.209Z', result: '03'},
            {format: 'h', date: '2023-05-01T11:03:42.209Z', result: '3'},
            {format: 'mm', date: '2023-05-01T11:03:42.209Z', result: '03'},
            {format: 'm', date: '2023-05-01T11:03:42.209Z', result: '3'},
            {format: 'ss', date: '2023-05-01T11:03:42.209Z', result: '42'},
            {format: 's', date: '2023-05-01T11:03:42.209Z', result: '42'},
            {format: 'ff', date: '2023-05-01T11:03:42.209Z', result: '209'},
            {format: 'A', date: '2023-05-01T11:03:42.209Z', result: 'PM'},
            {format: 'f', date: '2023-05-01T11:03:42.209Z', result: '209'},
            {format: 'A', date: '2023-05-01T11:03:42.209Z', result: 'PM'},
            {format: 'a', date: '2023-05-01T11:03:42.209Z', result: 'pm'},
            {format: 'ZZ', date: '2023-05-01T11:03:42.209Z', result: '+0400'},
            {format: 'Z', date: '2023-05-01T11:03:42.209Z', result: '+04:00'},
        ])('Should return $result for date $date when format is $format', ({format, date, result}) => {
            expect(handle(format, date)).toEqual(result);
        })
    })
})