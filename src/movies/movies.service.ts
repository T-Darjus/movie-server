import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private readonly prismaService: PrismaService) {}

  getMovies() {
    return this.prismaService.movieList.findMany();
  }
}
