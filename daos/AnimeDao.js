import animeModel from "../mongoose/anime/AnimeModel.js";

export const findAnime = (aid) => animeModel.findOne({animeId: aid});

export const createAnime = (anime) => animeModel.create(anime);

export const findAllAnime = () => animeModel.find();