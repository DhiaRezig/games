const test = require('ava')
var request = require('supertest')
const app = require('../app')

//testing for file services

test('returns top 3 played games from file', async (t) => {
    const res = await request(app)
        .get('/fileTopPlayedGames?nb=3')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 3)
    t.true(res.body[0].game === 'Among Us')
    t.true(res.body[1].game === 'FIFA 2020')
    t.true(res.body[2].game === 'Valorant')
})

test('returns top 2 played games filtred by platform and genre from file', async (t) => {
    const res = await request(app)
        .get('/fileTopPlayedGames?nb=2&genre=FPS&platforms=PC')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 2)
    t.true(res.body[0].game === 'Valorant')
    t.true(res.body[1].game === 'The last of us 2')
})

test('fails to return top 2 played games filtred by unknown platform from file ', async (t) => {
    const res = await request(app)
        .get('/fileTopPlayedGames?nb=2&platforms=PS5')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 0)
})

test('returns top 3 games with max players from file', async (t) => {
    const res = await request(app)
        .get('/fileMaxPlayers?nb=3')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 3)
    t.true(res.body[0].game === 'League of legends')
    t.true(res.body[1].game === 'World of warcraft')
    t.true(res.body[2].game === 'Hearthstone')
})

test('returns top 2 games with max players filtred by platform and genre from file', async (t) => {
    const res = await request(app)
        .get('/fileMaxPlayers??nb=2&genre=FPS&platforms=PS4')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 1)
    t.true(res.body[0].game === 'The last of us 2')
})

test('fails to return top games with max players filtred by unknown platform from file ', async (t) => {
    const res = await request(app)
        .get('/fileMaxPlayers?nb=2&platforms=PS5')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 0)
})

//testing for database services

test('returns top 3 played games', async (t) => {
    const res = await request(app)
        .get('/topPlayedGames?nb=3')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 3)
    t.true(res.body[0].game === 'Among Us')
    t.true(res.body[1].game === 'Valorant')
    t.true(res.body[2].game === 'FIFA 2020')
})

test('returns top 2 played games filtred by platform and genre ', async (t) => {
    const res = await request(app)
        .get('/topPlayedGames?nb=2&genre=FPS&platforms=PC')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 2)
    t.true(res.body[0].game === 'Valorant')
    t.true(res.body[1].game === 'The last of us 2')
})

test('fails to return top 2 played games filtred by unknown platform  ', async (t) => {
    const res = await request(app)
        .get('/topPlayedGames?nb=2&platforms=PS5')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 0)
})

test('returns top 3 games with max player', async (t) => {
    const res = await request(app)
        .get('/maxPlayers?nb=3')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 3)
    t.true(res.body[0].game === 'League of legends')
    t.true(res.body[1].game === 'Hearthstone')
    t.true(res.body[2].game === 'World of warcraft')
})

test('returns top 2 games with max player filtred by platform and genre ', async (t) => {
    const res = await request(app)
        .get('/maxPlayers??nb=2&genre=FPS&platforms=PS4')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 1)
    t.true(res.body[0].game === 'The last of us 2')
})

test('fails to return top games with max player filtred by unknown platform  ', async (t) => {
    const res = await request(app)
        .get('/maxPlayers?nb=2&platforms=PS5')
        .expect('Content-Type', /json/)
        .expect(200)

    t.is(res.body.length, 0)
})