// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// matches valid phone numbers

it('Check if is a phone number', () => {
    let num = functions.isPhoneNumber("666-666-6666");
    expect(num).toBe(true);
});

it('Check if is a phone number', () => {
    let num = functions.isPhoneNumber("420-420-6969");
    expect(num).toBe(true);
});

it('Check if is a phone number', () => {
    let num = functions.isPhoneNumber("6666");
    expect(num).toBe(false);
});

it('Check if is a phone number', () => {
    let num = functions.isPhoneNumber("420");
    expect(num).toBe(false);
});

// matches valid emails

it('Check if is a email', () => {
    let email = functions.isEmail("uwu@gmail.com");
    expect(email).toBe(true);
});

it('Check if is a email', () => {
    let email = functions.isEmail("getrekt@yahoo.com");
    expect(email).toBe(true);
});

it('Check if is a email', () => {
    let email = functions.isEmail("uwu");
    expect(email).toBe(false);
});

it('Check if is a email', () => {
    let email = functions.isEmail("ggez");
    expect(email).toBe(false);
});

// strong password

it('Check if is a strong password', () => {
    let pass = functions.isStrongPassword("password1234");
    expect(pass).toBe(true);
});

it('Check if is a strong password', () => {
    let pass = functions.isStrongPassword("secretshhh_");
    expect(pass).toBe(true);
});

it('Check if is a strong password', () => {
    let pass = functions.isStrongPassword("lul");
    expect(pass).toBe(false);
});

it('Check if is a strong password', () => {
    let pass = functions.isStrongPassword("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    expect(pass).toBe(false);
});

// is date

it('Check if is date', () => {
    let date = functions.isDate("01/11/1111");
    expect(date).toBe(true);
});

it('Check if is date', () => {
    let date = functions.isDate("6/9/4200");
    expect(date).toBe(true);
});

it('Check if is date', () => {
    let date = functions.isDate("011/111/111");
    expect(date).toBe(false);
});

it('Check if is date', () => {
    let date = functions.isDate("1111");
    expect(date).toBe(false);
});

// is hex

it('Check if is a hex color', () => {
    let hex = functions.isHexColor("#EEEEEE");
    expect(hex).toBe(true);
});

it('Check if is a hex color', () => {
    let hex = functions.isHexColor("#650");
    expect(hex).toBe(true);
});

it('Check if is a hex color', () => {
    let hex = functions.isHexColor("10");
    expect(hex).toBe(false);
});

it('Check if is a hex color', () => {
    let hex = functions.isHexColor("F");
    expect(hex).toBe(false);
});