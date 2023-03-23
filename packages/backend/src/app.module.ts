import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PoolsModule } from './pools/pools.module'
import { PrismaService } from './prisma.service'
import { UsersModule } from './users/users.module'

@Module({
  imports: [PoolsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
