const app = require('../index');
const chai = require('chai');
const request = require('supertest');
const env = require('dotenv').config();
const utilsGetToken = require('../utils/getTokenInfo');

const expect = chai.expect;

describe('API tests', function () {
    it('should have return Hello Apirest', async () => {
        const res = await request(app).get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

        expect( res.body.message ).to.be.equal('Hello Apirest');
        expect( res.statusCode ).to.be.equal(200);
    })
});

describe('API tests', function () {

    let token = "";
    before(async () => {
        const response = await request(app).post("/users/signup").send({
            email: "test@example.com",
            password: "password",
        });
        
        tokenResponse = await utilsGetToken("test@example.com","password");
        token = tokenResponse.idToken;
    });

    it('should have a list of study schedules ordered', async () => {
        const res = await request(app).post('/study_schedule/')
        .set('Accept', 'application/json')
        .set('Authorization', 'Bearer ' + token)
        .expect('Content-Type', /json/)
        .send({
            
                "userId": "aA2kDFJEpjQSuIcJMhHwS6gqqsD3",
                "courses": [
                    {
                        "desiredCourse": "PortfolioConstruction",
                        "requiredCourse": "PortfolioTheories"
                    },
                    {
                        "desiredCourse": "InvestmentManagement",
                        "requiredCourse": "Investment"
                    },
                    {
                        "desiredCourse": "Investment",
                        "requiredCourse": "Finance"
                    },
                    {
                        "desiredCourse": "PortfolioTheories",
                        "requiredCourse": "Investment"
                    },
                    {
                        "desiredCourse": "InvestmentStyle",
                        "requiredCourse": "InvestmentManagement"
                    }
                ]
            
        });

        expect( res.statusCode ).to.be.equal(201);
        expect( res.body.result ).to.eql([
                "Finance",
                "Investment",
                "InvestmentManagement",
                "PortfolioTheories",
                "InvestmentStyle",
                "PortfolioConstruction"
            ],
        );
    })
});