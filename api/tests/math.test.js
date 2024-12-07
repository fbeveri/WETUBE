

import { add } from '../src/utils/math.js';
import { subtract } from '../src/utils/math.js';

import { expect } from 'chai';
import app from '../src/index.js';
import request from 'supertest';

describe('Test express API', () => {
  it('Endpoint /users', async () => {
    const res = await request(app).get('/users');
    expect(res.status).to.equal(200);
  });
});



describe('Test express API', () => {
  it('Endpoint /videos', async () => {
    const res = await request(app).get('/videos');
    expect(res.status).to.equal(200);
  });
});

describe('Math Functions', ()=>{
    it('Retourne la somme de 2 + 3 qui doit retourner 5', () => {
        const result = add(2,3);
        const attempt_result = 5;
        expect(result).to.equal(attempt_result);
    })
    it('Retourne la soustraction de 2-3 qui doir retourner -1',()=>{
      const result=subtract(2,3);
      const attempt_result=-1;
      expect(result).to.equal(attempt_result);
    })
})

