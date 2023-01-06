import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserType } from '@prisma/client';
// import { AuthGuard } from 'src/guards/auth.guard';
import { Roles } from 'src/user/decorators/roles.decorator';
// import { User, UserInfo } from 'src/user/decorators/user.decorator';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Roles(UserType.USER, UserType.ADMIN)
  @Get()
  getMovies() {
    return this.movieService.getMovies();
  }
}
