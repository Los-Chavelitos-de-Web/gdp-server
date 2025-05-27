import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
  ForbiddenException,
  Param,
  Post,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { JsonWebTokenError, JwtService } from '@nestjs/jwt'; // Asegúrate de importar el JwtService
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  @Get('getAll')
  async getAllUsers(@Headers('Authorization') headers: string) {
    try {
      if (!headers) {
        throw new UnauthorizedException({
          message: 'Token not found',
        });
      }

      const token = headers.replace('Bearer ', '');

      const decoded = this.jwtService.verify(token);

      if (!decoded || !decoded['role']) {
        throw new UnauthorizedException({
          message: 'Invalid token or role not found in token',
        });
      }

      const userRole = decoded['role'];
      const requiredRole = 'ADMIN';

      if (userRole !== requiredRole) {
        throw new ForbiddenException({
          message: 'You do not have permission to access this resource',
        });
      }

      return this.userService.getAllUsers();
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new UnauthorizedException({
          message: 'Invalid or expired token',
        });
      }

      throw new UnauthorizedException({
        message: 'You do not have permission to access this resource',
      });
    }
  }

  @Post('getOne')
  async getUserById(
    @Body('userId') userId: number,
    @Headers('Authorization') headers: string,
  ) {
    try {
      if (!headers) {
        throw new UnauthorizedException('Token not found');
      }

      const token = headers.replace('Bearer ', '');
      const decoded = this.jwtService.decode(token);

      const tokenUserId = decoded['userId'];
      const role = decoded['role'];

      const isAdmin = role === 'ADMIN';
      const isOwner = userId === tokenUserId;

      if (!isAdmin && !isOwner) {
        throw new ForbiddenException('Access denied');
      }

      const user = await this.userService.getUserById(userId);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      return user;
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new UnauthorizedException('Invalid or expired token');
      }
      throw error;
    }
  }
}
