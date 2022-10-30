import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

import { CreateUserDto, LoginUserDto } from './dto';
import { User } from './entities/user.entity';

@Injectable()
export class AuthService {
  // inyecto lo que necesito, asi desacoplo todo, en los parametros del constructor
  // creo una propiedad privada decorada con InjectRepository que le paso la entidad User
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      // que hago aca abajo ?
      // primero desestructuro createUserDto que viene de cliente
      // saco password y los demas datos los mando a userData
      const { password, ...userData } = createUserDto;
      // abajo lo que hago es mandar los datos que habia sacado menos el password
      // y a la propiedad password la encripto
      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });
      await this.userRepository.save(user);
      delete user.password;
      return user;
      // TODO devolver JWT no el user
    } catch (error) {
      this.handleDBErrors(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    
  }

  private handleDBErrors(error: any): never {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    console.log(error);
    throw new InternalServerErrorException('Please check server error');
  }
}
