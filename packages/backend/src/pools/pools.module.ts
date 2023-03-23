import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { DepositsController } from './controllers/deposits.controller'
import { PoolsController } from './controllers/pools.controller'
import { DepositsService } from './services/deposits.service'
import { PoolsService } from './services/pools.service'

@Module({
  controllers: [DepositsController, PoolsController],
  providers: [DepositsService, PoolsService, PrismaService],
})
export class PoolsModule {}
