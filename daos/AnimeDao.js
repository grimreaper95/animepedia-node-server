import animeModel from "../mongoose/anime/AnimeModel.js";

/** animeId is the id by which an anime is represented in the Jikan API **/
export const findAnime = (aid) => animeModel.findOne({animeId: aid});

export const createAnime = (anime) => animeModel.create(anime);

export const findAllAnime = () => animeModel.find();