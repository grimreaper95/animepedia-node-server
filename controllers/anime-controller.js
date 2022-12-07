import * as animeDao from '../daos/AnimeDao.js'

const AnimeController = (app) => {
    const findAnime = async (req, res) => {
        const anime = await animeDao.findAnime(req.params.aid);
        res.json(anime);
    }

    const findAllAnime = async (req, res) => {
        const user = await animeDao.findAllAnime();
        res.json(user);
    }

    const createAnimeData = async (req, res) => {
        const anime = req.body.data
        const animeData = []
        for (let i = 0; i < anime.length; i++) {
            console.log(anime[i]);
            const imageVal = anime[i].images;
            console.log(imageVal);
            const imageUrl = imageVal.jpg;
            const newAnime = new Object({
                                              animeId: anime[i].mal_id,
                                              image_url: imageUrl.image_url,
                                              title: anime[i].title,
                                              synopsis: anime[i].synopsis,

                                          })
            const insertedAnime = await animeDao.createAnime(newAnime);

        }
        res.status(200).send('some text');
    }

    app.get('/anime/all', findAllAnime);
    app.get('/anime/:aid', findAnime);
    app.post('/anime', createAnimeData)
}

export default AnimeController