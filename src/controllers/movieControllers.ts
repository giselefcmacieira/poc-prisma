import { ReadMovie } from "@/protocols/protocols";
import { CreateMovie, UpdateMovie } from "@/repositories/movieRepository";
import { movieServices } from "@/services/movieService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function postMovie(req: Request, res: Response): Promise<void> {
    await movieServices.createMovie(req.body as CreateMovie)
    res.status(httpStatus.CREATED).send({ message: 'Movie successfully created!' })
}

export async function putMovie(req: Request, res: Response): Promise<void> {
    const { id, status, comment } = req.body
    const movie = { status, comment }
    await movieServices.updateMovie(id, movie)
    res.status(httpStatus.OK).send({ message: 'Movie updated successfully!' })
}

/* export async function getMovies(req: Request, res: Response): Promise<void> {
    const movies = await movieServices.readMovies(req.query as ReadMovie)
    res.status(httpStatus.OK).send(movies.rows)
}

export async function deleteMovies(req: Request, res: Response): Promise<void> {
    const id: number = Number(req.params.id)
    await movieServices.deleteMovie(id)
    res.status(httpStatus.OK).send('Movie deleted successfully')
} */