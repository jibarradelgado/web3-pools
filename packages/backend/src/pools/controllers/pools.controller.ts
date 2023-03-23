import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { PoolsService } from '../services/pools.service'
import { Pools as PoolsModel, Prisma } from '@prisma/client'

@Controller('pools')
export class PoolsController {
  constructor(private readonly poolsService: PoolsService) {}

  @Get()
  async getPools(): Promise<PoolsModel[]> {
    return this.poolsService.pools()
  }

  @Get(':poolId')
  async getPool(@Param('poolId') poolId: number): Promise<PoolsModel> {
    return this.poolsService.pool({
      where: {
        id: Number(poolId),
      },
    })
  }

  @Post('pool')
  async createPool(
    @Body() poolData: { name: string; address: string; apy: number },
  ): Promise<PoolsModel> {
    const { name, address, apy } = poolData
    return this.poolsService.createPool({
      data: {
        name: name,
        address: address,
        apy: new Prisma.Decimal(apy),
      },
    })
  }
}
