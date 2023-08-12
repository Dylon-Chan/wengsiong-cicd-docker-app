const express = require('express');
const app = require('./index.js');
const request = require('supertest');

describe('App Test', () => {
    it('should return a greeting message with 200 status code', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toContain('Hello World from');
        expect(res.text).toContain('in DEV!');
        expect(res.text).toContain('I have been running for');
    });
});