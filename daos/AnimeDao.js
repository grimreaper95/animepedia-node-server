import animeModel from "../mongoose/anime/AnimeModel.js";

export const findAnime = (id) => animeModel.findById(id);

export const createAnime = (anime) => animeModel.create(anime);

export const findAllAnime = () => animeModel.find();