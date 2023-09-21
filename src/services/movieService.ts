import { badRequestError } from "@/errors/badRequest";
import { conflictError } from "@/errors/conflict";
import { ReadMovie, Resp } from "@/protocols/protocols";
import { UpdateMovie, movieRepository } from "@/repositories/movieRepository";
import { CreateMovie } from "@/repositories/movieRepository";
import { Movies } from "@prisma/client";

function createMovie(movie: CreateMovie) {
    return movieRepository.createMovie(movie)
}

async function updateMovie(id: number, movie: UpdateMovie) {
    const existingMovie: Movies = await movieRepository.selectById(id)
    if (!existingMovie) {
        throw conflictError('This movie do not exist!')
    }
    return movieRepository.updateMovie(id, movie)
}

/* function readMovies(movie: ReadMovie) {
    return movieRepository.selectMovies(movie)
}

async function deleteMovie(id: number) {
    const existingMovie: Resp = await movieRepository.selectById(id)
    if (existingMovie.qtd === 0) {
        throw badRequestError('This movie do not exist!')
    }
    return movieRepository.deleteMovie(id)
} */

export const movieServices = { createMovie, updateMovie }