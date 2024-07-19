
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioArmazenado } from './usuario.dm';



@Module({

  controllers: [UsuarioController],
  providers: [UsuarioArmazenado],
})
export class UsuarioModule {}
