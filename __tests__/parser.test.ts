import {
    SMS_XML,
    MANY_SMS_XML,
    INVALID_XML,
    MANY_THREADS_SMS_XML
} from './testXml';

const COUNTRY_CODE = '+48';

function expectSmsEquality(resultSms, expectedSms) {
    expect(resultSms.type).toEqual(expectedSms.type);
    expect(resultSms.body).toEqual(expectedSms.body);
    expect(resultSms.date).toEqual(expectedSms.date);
}

test('Should return an empty array if input string is null.', () => {
    const [result, error] = parseXml(null);
    expect(result).toHaveLength(0);
    expect(error).toBeFalsy();
});

test('Should return an error and an empty array if input XML is invalid.', () => {
    const [result, error] = parseXml(TEST_INVALID_XML);
    expect(result).toHaveLength(0);
    expect(error).toBeTruthy();
});

const expectedSms = {
    type: '1',
    body: 'm1',
    date: '1519980674209'
};

test('Should return one SMS with body.', () => {
    const [result, error] = parseXml(TEST_SMS_XML);

    expect(error).toBeFalsy();
    expect(result).toHaveLength(1);

    const resultSms = result[0];
    expect(resultSms).toBeTruthy();

    expectSmsEquality(resultSms, expectedSms);
});

test('Should return four SMSes with body.', () => {
    const [result, error] = parseXml(TEST_MANY_SMS_XML);

    expect(error).toBeFalsy();
    expect(result).toHaveLength(4);

    const resultSms = result[0];
    expect(resultSms).toBeTruthy();

    expectSmsEquality(resultSms, expectedSms);
});

test('Should return one thread with four SMSes.', () => {
    const [result] = parseXml(TEST_MANY_SMS_XML);
    const threads = orderParsedSms(result, COUNTRY_CODE);
    expect(threads).toHaveLength(1);
    expect(threads[0]).toHaveLength(4);
});

test('Should return two threads with four SMSes each.', () => {
    const [result] = parseXml(TEST_MANY_THREADS_SMS_XML);
    const threads = orderParsedSms(result, COUNTRY_CODE);
    expect(threads).toHaveLength(2);
    expect(threads[0]).toHaveLength(4);
    expect(threads[1]).toHaveLength(4);
});

test('Should return two threads with 2 SMSes and 2 MMSes each.', () => {
    const [result] = parseXml(TEST_MMS_WITH_SMS_MANY_THREADS_XML);
    const threads = orderParsedSms(result, COUNTRY_CODE);
    expect(threads).toHaveLength(2);
    expect(threads[0]).toHaveLength(4);
    expect(threads[1]).toHaveLength(4);
});
